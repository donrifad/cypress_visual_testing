# Frame Work Setup #
<br>This is a based on  cypress with the cypress-image-snapshot pluging </br>
<br>Main reason for this project is to test the page responsiveness of a web page</br>

## Pre prerequisites ##
Install  node https://nodejs.org/en/download/

```
node --version
```

**Project set up**
<br>Clone the project from the repo</br>
<br>Open the project from the editor </br>
<br>Go to terminal and install all required dependencies using package.json </br>
<br>Most of the time editor will install the dependencies automatically</br>
<br> plugin is added inside the plugin folder</br>
```
npm install
```
<br> We have used cypress 4.1 </br>


## Execute the tests ##
* To execute the tests on you have to run the test firts,it will take the sanp shots of your web pages and saved in the screen shot folder this will automatically generated.
* Automatic folder will generated when you run the test again with the screen shot comparisions reports
* Run the below command twice, first time it will take the snap shots and second run it will compare the snapshots and generate the reports
*Test file name is example_spec.js under integration folder
```
npx cypress run -b chrome
```
* to update the snap shots run
```
npx cypress run --env updateSnapshots=true

```
