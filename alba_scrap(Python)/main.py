import os
import csv
import requests
from bs4 import BeautifulSoup

os.system("clear")
alba_url = "https://www.alba.co.kr"
result = requests.get(alba_url)
soup = BeautifulSoup(result.text, "html.parser")
superBrand = soup.find("div", id="MainSuperBrand")
companys = superBrand.find_all("ul", {"class":"goodsBox"})

def save_to_file(company_name, jobs):
  file = open(f"{company_name}".replace("/","_"), mode="w")
  writer = csv.writer(file)
  writer.writerow(["place","title","time","pay","date"])
  for job in jobs:
    job_list = [job[i*5:(i+1)*5] for i in range((len(job) - 1 + 5) // 5)]
    for save in job_list:
      writer.writerow(save)

def extract_info(tbody, company_name):
  jobs = []
  for tr in tbody:
    info = tr.find_all("tr",{"class":""})
    job = []
    for td in info:
      try:
        location = td.find("td",{"class":"local"}).text
      except Exception:
        location = "위치정보 없음"
      try:
        company = td.find("td",{"class":"title"}).find("a").find("span",{"class":"company"}).string
      except Exception:
        company = "회사정보 없음"
      try:
        job_time = td.find("td",{"class":"data"}).find("span",{"class":"time"}).string
      except Exception:
         job_time ="시간협의"
      try:
        month, money = td.find("td",{"class":"pay"}).find_all("span")
        month = month.string
        money = money.string
        pay = month+money
      except Exception:
        month = "급여협의 "
        money = "급여협의"
        pay = month+money
      try:
        regDate = td.find("td",{"class":"regDate"}).find("strong").string
      except Exception:
        regDate = "시간정보 없음"
      job.append(location)
      job.append(company)
      job.append(job_time)
      job.append(pay)
      job.append(regDate)
    jobs.append(job)
    save_to_file(company_name, jobs)

for company in companys:
  links = company.find_all("li")
  for link in links[:-1]:
    jobs_url = link.find("a")["href"]
    company_name = link.find("span",{"class":"logo"}).find("img")["alt"]
    results = requests.get(jobs_url)
    link_soup = BeautifulSoup(results.text, "html.parser")
    tbody = link_soup.find_all("tbody")
    job = extract_info(tbody, company_name)