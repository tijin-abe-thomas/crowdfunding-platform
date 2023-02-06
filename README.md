# crowdfunding-platform

## Initialising the project

Clone the repository to the local machine by running the following command in the required directory:

```git clone https://github.com/tijin-abe-thomas/crowdfunding-platform.git```

Navigate to the folder:

```cd crowdfunding```

## Making a local TestNet using Hardhat

In case you have a globally installed version of yarn,
Remove it completely using the following commands:

```sudo apt remove cmdtest```
```sudo apt remove yarn```

Install curl on your system using:

```sudo apt install curl```

Download the pubkey.gpg file using:

```wget -nc https://dl.yarnpkg.com/debian/pubkey.gpg  <br />cat pubkey.gpg| gpg --dearmor | sudo tee /usr/share/keyrings/pubkey.gpg > /dev/null 2>&1 <br /> echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list <br />  sudo apt-get update  <br /> sudo apt-get install yarn -y <br /> yarn add --dev hardhat <br /> yarn install```

Run the Hardhat Network using:

```npx hardhat node```

Use Metamask and enable test networks. You will see your hardhat network on the "Localhost 8545" test net.
