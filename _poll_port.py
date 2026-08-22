import socket, time
for i in range(25):
    s = socket.socket()
    r = s.connect_ex(("127.0.0.1", 3000))
    s.close()
    print("try", i, "r", r, flush=True)
    if r == 0:
        break
    time.sleep(1)
