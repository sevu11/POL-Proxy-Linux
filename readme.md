# PlayOnline Login Proxy (Windows & Linux)

The PlayOnline Login Proxy is a simple way to bypass the annoying PlayOnline loading that happens before the game launches. This does not bypass POL or send anything to third-party servers. It's completely self-contained and runs on your PC.

Instead of reaching out to the PlayOnline servers and getting the PML files from their server, we serve our own page directly from your PC. This page loads you directly into the game as soon as it loads.

You can see how it works by checking out the video here:  
https://www.youtube.com/watch?v=SATgkzxw_ss

## Setup

### Linux (+ Steam Deck)

To bypass the login process, you need to modify your hosts file in both Linux and Windows. These files are located at `/etc/hosts` and `C:\Windows\system32\drivers\etc\`.

1. Open your terminal (e.g. konsole, kitty, terminal etc).

2. Run:  
   `sudo nano /etc/hosts`  

   Add this line at the top:  
   `127.0.0.1    wh000.pol.com`  

   Save and exit (CTRL+O, ENTER, CTRL+X).

3. Next, navigate to your Windows hosts file inside your Wine prefix for the game.  

   Example:  
   `sudo nano ~/Games/final-fantasy-xi-online/drive_c/windows/system32/drivers/etc/hosts`  

   Add the same line:  
   `127.0.0.1    wh000.pol.com`  

   Save and exit (CTRL+O, ENTER, CTRL+X).

4. Download/clone this repo (press Code -> Download `.zip`) or `git clone https://github.com/sevu11/POL-Proxy-Linux.git`

5. Run the launch script (`startProxy.sh`). You should see:  
    `Starting proxy in background...`
    `Proxy server started. Logs are in proxy.log`

6. Recommendation: Add it to your autostart or run it before launching the game.

**Note:** If you modify the hosts files and do not run POLProxy, you will not be able to connect to POL. To undo, simply remove the line from your hosts files.

### Windows

1. Press the Windows key, type `notepad`, right-click it, and select "Run as administrator".
2. In Notepad, open this path:  
   `C:\Windows\system32\drivers\etc\hosts`
3. Add this line to the bottom:  
   `127.0.0.1    wh000.pol.com`
4. Save the file and close Notepad.
5. Download and run:  
   https://github.com/jaku/POL-Proxy/releases/download/1.0.0/PolProxy.exe  
   You should see:  
   `POL Proxy is running on port 51304`

**Note:** If you modify the hosts file and do not run POLProxy, you will not be able to connect to POL. To undo, simply remove the line from your hosts file.

## Other

That should be about it. Just remember to run the application before logging into POL. You can technically close it after login, but it uses very little resources, so it's fine to leave it running.

## License

[MIT](https://choosealicense.com/licenses/mit/)
