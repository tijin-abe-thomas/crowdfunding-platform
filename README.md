# crowdfunding-platform

## Initialising the project

Clone the repository to the local machine by running the following command in the required directory:

```git clone https://github.com/tijin-abe-thomas/crowdfunding-platform.git```

Navigate to the folder:

```cd crowdfunding```
```cd web-final```

## FOR WINDOWS: 

install the required dependencies with 

```npm --save-dev install --legacy-peer-deps```

run a hardhat local testnet 

```npx hardhat node```

in a different cmd window, deploy the smart contracts

```npx run scripts/deploy.js --network localhost```

!! at this point, change the smart contract addresses in the project to whatever is displayed on the terminal !!

now run the server with 

```npm run dev```

you will be able to see the website on your localhost:3000

## Making a local TestNet using Hardhat

In case you have a globally installed version of yarn,
Remove it completely using the following commands:

```sudo apt remove cmdtest```
```sudo apt remove yarn```

Install curl on your system using:

```sudo apt install curl```

Download the pubkey.gpg file using:

```
wget -nc https://dl.yarnpkg.com/debian/pubkey.gpg

cat pubkey.gpg| gpg --dearmor | sudo tee /usr/share/keyrings/pubkey.gpg > /dev/null 2>&1 

echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update 

sudo apt-get install yarn -y

yarn add --dev hardhat

yarn install
```

Run the Hardhat Network using:

```npx hardhat node```

Use Metamask and enable test networks. You will see your hardhat network on the "Localhost 8545" test net.
