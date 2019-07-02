---
sidebar: auto
---

# Yarn Troubleshoot

### Problem :  yarn global nggak jalan di linux
#### solusi :
Confirm your global bin path
```
yarn global bin
```
I got: /home/username/.yarn/bin
set yarn prefix:
make sure your yarn prefix is the parent directory of your bin directory. You can confirm by running

yarn config get prefix
when I ran this, my prefix was empty, so I set it:
```
yarn config set prefix ~/.yarn
```
add the following to ~/.bash_profile or ~/.bashrc
```
export PATH="$PATH:`yarn global bin`"
```

::: tip
for zsh users, be sure to add this line to ~/.zshrc
:::

restart your shell or start a new one
```
bash -l or zsh
```

Referensi : [Referensi](https://stackoverflow.com/questions/40317578/yarn-global-command-not-working/40333409#40333409)