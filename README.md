# Windows Login Phishing page (still in development)
This is a phishing page for windows login screen. That's it.
## Use this link to preview without downloading/cloning. 
https://htmlpreview.github.io/?https://github.com/CipherKill/windows-login-phish/blob/main/index.html

## Issues/Bugs:
- AttackerSetup.py has a bug where app sometimes does not close on pressing ctrl+c (you can close the window to force close the program).
- Mysterious GET request done an extra time.
- Need to make focus element on text field on start
- Make the slideup functional with spacebar.
- Make force fullscreen (UNLIKELY FIX but will look into)

# How to use ?
For now,  
- Host the root directory using the command `python3 -m http.server` (tested on linux) and keep the IP address
and port number of the hosting(attacker) machine known to you.  
- In the victim device open their browser. In the url bar type the address of the hosting(attacker) machine along with the port.  
- Example `192.168.1.102:8000` assuming Host(attacker) machine IP address is 192.168.1.102 and PORT is 8000.  
- When the user gets phished to enter the username and password. You will see a GET request being made in the hosting(attacker) machine. Within that GET request you will see the username and password.

## Screenshots
### Victim Screen
<p float='left'>
<img src="https://github.com/CipherKill/windows-login-phish/blob/main/Screenshots/cover(victim).png" width="500px"></img>
<img src="https://github.com/CipherKill/windows-login-phish/blob/main/Screenshots/login(victim).png" width="500px"></img>
</p>

### Attacker Screen
<img src="https://github.com/CipherKill/windows-login-phish/blob/main/Screenshots/attacker-screen-new.jpg"></img>
<img src="https://github.com/CipherKill/windows-login-phish/blob/main/Screenshots/attacker-screen-zoomed.jpg"></img>


# What it is made and used with so far?
- HTML  (for webpage)
- CSS (for styles)
- JS  (for functionality)
- http.server module->Python (for hosting)


