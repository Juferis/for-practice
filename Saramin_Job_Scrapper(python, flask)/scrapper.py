import requests
from bs4 import BeautifulSoup

def get_last_page(url):
    result = requests.get(url)
    soup = BeautifulSoup(result.text, "html.parser")
    pages = soup.find("div", {"class": "pagination"}).find_all("a")
    last_page = pages[-2].string
    return int(last_page)

def extract_job(html):
    try:
      title = html.find("a")["title"]
    except Exception:
      title = "정보없음"
    try:
      company = html.find("strong", {"class": "corp_name"}).find("a")["title"]
    except Exception:
      company = "정보없음"
    try:
      location = html.find("div", {
        "class": "job_condition"
    }).find("span").find("a").string
    except Exception:
      location = "정보없음"
    try:
      job_date = html.find("div", {
        "class": "job_date"
    }).find("span", {
        "class": "date"
    }).string
    except Exception:
      job_date = "정보없음"
    try:
      link = html.find("a")["href"]
    except Exception:
      link = "정보없음"
    return {
        "title": title,
        "company": company,
        "location": location,
        "date": job_date,
        "link": f"http://www.saramin.co.kr{link}"
    }

def extract_jobs(last_page, word):
    jobs = []
    for page in range(last_page):
        print(f"Scrapping Saramin page {page+1}")
        result = requests.get(
            f"http://www.saramin.co.kr/zf_user/search/recruit?search_area=main&search_done=y&search_optional_item=n&searchType=search&searchword={word}=&recruitPage={page+1}&recruitSort=relation&recruitPageCount=40&inner_com_type=&company_cd=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C9%2C10&quick_apply=&except_read=")
        soup = BeautifulSoup(result.text, "html.parser")
        results = soup.find_all("div", {"class": "item_recruit"})
        for result in results:
            job = extract_job(result)
            jobs.append(job)
    return jobs

def get_jobs(word):
    url = f"http://www.saramin.co.kr/zf_user/search/recruit?search_area=main&search_done=y&search_optional_item=n&searchType=search&searchword={word}&recruitPage=1&recruitSort=relation&recruitPageCount=40&inner_com_type=&company_cd=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C9%2C10&quick_apply=&except_read="
    last_page = get_last_page(url)
    jobs = extract_jobs(last_page, word)
    return jobs
