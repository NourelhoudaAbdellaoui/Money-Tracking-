                   Money-Tracking-
                                         Project Tracking money 
                      Based on blockchain technology
                      Using essentially Remix /metamask wallet /RinkebyTestnetNetwork
So This project is based on blockchain technology in order to ensure traceability and security of my money transaction  
Step1:setup your development environment in my case i used VS code for developing frontend part for our  website web3.js 
https://code.visualstudio.com/download
You can download it via this link above 
Step 2:let’s create our smart contract on remix IDE 
Remix IDE is an IDE that  allows developing, deploying and administering smart contracts for Ethereum like blockchains. So just open it via this link https://remix-project.org/
And then click on the red button Remix IDE 
![image](https://user-images.githubusercontent.com/87576820/189755989-6e9a5047-8fba-457a-ae51-2e751c919a88.png)
 Then will affiche your development environment that we will use it for developing your solidity code 
 ![image](https://user-images.githubusercontent.com/87576820/189756343-7e1a5fcb-b830-41cd-83da-4e026002869a.png)
And then select contract >new file>donation.sol
And then write your code 
![image](https://user-images.githubusercontent.com/87576820/189756455-2788d590-21bd-496a-8354-eecfd154916c.png)
Everything detailed in the code So all you need now is to compile your code![image](https://user-images.githubusercontent.com/87576820/189756633-90a304c1-4878-4ebe-8ea2-78038c287d94.png)
![image](https://user-images.githubusercontent.com/87576820/189756709-add2685a-b9ef-4114-8bee-95b65a105688.png)
and then click on 
And then get  your ABI code by click here and copied it into your js code ![image](https://user-images.githubusercontent.com/87576820/189756930-4101f191-f0ee-454f-a8ac-ed7774a6298d.png)
And now deploy your smart contract by clicking on this button ![image](https://user-images.githubusercontent.com/87576820/189757098-fef050d8-1429-46ce-b28e-405a2b1aa103.png)
and then deploy it by clicking on this button ![image](https://user-images.githubusercontent.com/87576820/189757332-01eec950-c16d-4b0a-a27d-82579cd65069.png)
so now you have create a smart contract on Remix and compile and deploy it (in my case i deploy it in my local blockchain Ganache just choose
 
 your environment ![image](https://user-images.githubusercontent.com/87576820/189757589-085c5535-6b4a-45ce-8c86-3eb1a8f5154d.png)
and use your rpc server ganache detail ![image](https://user-images.githubusercontent.com/87576820/189761071-6361e590-c316-447f-8af7-85fad309024c.png)
So now let’s take another step to the frontend part 
Step2:Frontend part 
Basically to develop it I use some basic of html /css and js so let’s move on how to connect our simple web page to the web 3 by adding a script of web 3 you will find it in the  code and enable and now in order to donate money we use metamask wallet just i have some fake ethers (for having some fake ethers on your metamask just follow this link https://faucets.chain.link/rinkeby )to test the transaction and i use for an environment test named rinkeby test network (to now how you added to your wallet just download metamask wallet and then follow those  simple steps settings>networks>write rinkeby test network>follow some details and finally you added your test network it will look like this 
![image](https://user-images.githubusercontent.com/87576820/189761173-edfa30e2-9d65-4c97-8437-bc5dc66b2f7f.png)
So now after this thanks to some code of js you will connect your metamask to you connect button when you will click on it your will get your address account connected now 
![image](https://user-images.githubusercontent.com/87576820/189761232-f82c51da-83c5-422c-abfb-9ed87773e80c.png)
And then fill the blanks in your form 
![image](https://user-images.githubusercontent.com/87576820/189761334-e5110e8c-216a-49a8-8359-1d0d8c1ab2e7.png)
And then press the button donate and then confirm your transaction on the wallet metamask
![image](https://user-images.githubusercontent.com/87576820/189761395-417aa887-e4c4-4f1b-8b48-2646776a0bbe.png)
And then confirm your transaction just open your metamask your account on etherscan (it just a test click on 3 points on the right of your account address and then click view in ether scan and then the transaction with its single detail on etherscan 
![image](https://user-images.githubusercontent.com/87576820/189761533-291dd44d-0fb5-4480-a5b3-5d1ff4849012.png)
That’s all 
Wish this documentation  was helpful for you 





