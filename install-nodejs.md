# Install NodeJS


## Linux

Node is available in most of Linux distributions, you use system built-in package manager to install it directly.

For example, for ubuntu and debian users, use apt-get to install it.

```
apt-get install nodejs
``` 

For Redhat/CentOS/RHEL, you can use `yum` or new `dnf` command to install it.

If you want to install the newest NodeJS for your system, check the official installation guide to install NodeJS using [NodeSource repository](nodesource.com).

* [Official NodeJS installation guide](https://nodejs.org/en/download/package-manager/)

## Windows 

For users, you can download the NodeJS installer from [nodejs.org](http://nodejs.org) and install it into your system.

Or use [Chocolatey](http://chocolatey.org/) to install it sliently.

In some cases, after nodejs is installed, when you use `npm` to install some packages, it could be built from source codes against your system. 

Under Windows, you have to install a C++ compiler and Python 2.7(Python 3.3 is not support).

1. You can install `windows-build-tools` via `npm` command line.

    ```
	npm install -g windows-build-tools
	```

2. Install these dependencies manually.

    * Install [Visual C++ Build Tools](http://landinghub.visualstudio.com/visual-cpp-build-tools), or [Visual Studio 2015 or 2017](https://www.visualstudio.com/products/visual-studio-community-vs), please make sure checkbox of **C++ build tools** is checked. 
	* Install [Python 2.7](https://www.python.org/downloads/), add it in system PATH environment variable, or run `npm config set python python2.7path` to configure it in NPM configuration.
	* Configure `msvs_version`, `npm config set msvs_version 2015`
	
	
## Configure NPM mirrors

For most of Chinese users, you have to use a NPM registry mirror to get better experience.

Check this topic in stackoverflow.
	
* [`npm install` goes to dead in China](http://stackoverflow.com/questions/22764407/npm-install-goes-to-dead-in-china)