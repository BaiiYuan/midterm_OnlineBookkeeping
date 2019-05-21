# Online Bookkeeping

Midterm work of Web Programming 2019

### Github Link 

<https://github.com/BaiiYuan/midterm_OnlineBookkeeping>

### 簡介

簡單的記帳網站，可以加入、刪除紀錄，並視覺化顯示圖表

##### 預覽圖：

<img src="./img/preview01.png" width="90%">

<img src="./img/preview02.png" width="90%">

### 操作方式

1. `git clone https://github.com/BaiiYuan/midterm_OnlineBookkeeping`
2. `cd midterm_OnlineBookkeeping/online_bookkeeping`
3. `npm install`
5. `node server.js`
6. Open another terminal and do `npm start`
7. Go to  http://localhost://3000

### 功能

1. 可以檢視所有記錄的結果
2. 可以刪除紀錄
3. 根據類別、時間來加入一筆記帳
4. 視覺畫圖表，包含過去十天的消費金額變化、消費類別在各時期的比例
5. 就算不用來記帳，看起來也很舒服(x)

### 使用到的框架

- Frontend
  - react.js
  - bootstrap
- Backend
  - express.js
  - node.js
  - Mongodb as database

### 參考

- Frontend
  - Css and Componet -- <https://www.free-css.com/free-css-templates/page192/dashgum>
  - Chart.Js - <https://www.chartjs.org/docs/latest/>
- Backend:
  - rics_chat_boilerplate
  - <https://codeforgeek.com/mongodb-atlas-node-js/>
- Connection between Frontend and Backend
  - <https://github.com/honey93/OrderKitchen>

### 貢獻

* Use React.Js to construct the frontend
* Use Chart.Js to draw lots of charts
* Construct the backend server

### 心得

- 由於小弟的美術天分過差，做這個Project的第一步就是找一個美美的template。所以在做Project的時候看到美美的介面就心情很好 (x)

- 第一次串連資料庫就還蠻順利的，可能是因為老師有示範過了吧，比想像中的碰壁還要少。

- 主要花最多時間的還是React的問題，有時候一些值傳來傳去就會壞掉。不過最後都順利解決了。

- 由於存取很多數據，所以想到視覺化可能是個很好的點子，於是決定適用chart.Js，但這又是崩潰的開始。因為版本眾多，很多網路上的教學都不一樣，好險最後找到一個很棒的document。過程中也遇到了canvas畫圖的生命週期問題，最後也在同學的協助下順利弄好了。
- Project這東西應該要在半夜做最有效率 (x)