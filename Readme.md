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
* To execute the tests on you have to run the test first,it will take the sanp shots of your web pages and saved in the screen shot folder this will automatically generated.
* Automatic folder will generated when you run the test again with the screen shot comparisions reports.
* Run the below command twice, first time it will take the snap shots and second run it will compare the snapshots and generate the reports.
* Test file name is example_spec.js under integration folder
```
npx cypress run -b chrome
```
* to update the snap shots run
```
npx cypress run --env updateSnapshots=true

```

* After completed test run
<img width="907" alt="Screenshot 2022-07-27 at 16 08 37" src="https://user-images.githubusercontent.com/5151534/181231288-ad27c2cd-54dd-4169-a4ce-3ffd4190108c.png">

* Image comparission report on failed test cases,Folders with the images will automatically generated in the project root folder.
<img width="1733" alt="Screenshot 2022-07-27 at 16 07 05" src="https://user-images.githubusercontent.com/5151534/181231312-ed1759db-7335-4f70-9d89-074b4f5154f6.png">


