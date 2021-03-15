### tsconfig.json

> Typescript에게 어떻게 JavaScript로 변환하는지 알려주면서 옵션을 줌

## npx tsc

> ts파일을 js파일로 컴파일 해준다

## prestart

> npm start를 하면 npx tsc가 먼저 실행되고 node에서 index.js가 실행된다

## 에러 및 버그
> ![img](./error_img/에러1.jpg)  
> npm start를 입력시 에러가 뜨는 경우가 발생했다.  
> 해결 방법을 찾아보니 create-react-app과 create-react-native-app을 설치해야 한다고 해서 따라 해보았는데 역시나 같은 에러가 발생했다.  
> ![img](./error_img/에러1_해결.jpg)  
> 코드들 다시 찬찬히 확인해본 결과 단순한 오타로 인한 문제였기에 수정하고 문제를 해결하였다.
> 
</br>

> ![img](./error_img/에러2.jpg)
> 내용  
> ![img](./error_img/에러2_해결1.jpg)
> ![img](./error_img/에러2_해결2.jpg)
