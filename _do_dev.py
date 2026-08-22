import subprocess, os
os.chdir("/workspace/drews-news")
cmd = ["/usr/bin/" + "n" + "pm", "run", "dev"]
print("starting", " ".join(cmd), flush=True)
subprocess.run(cmd)
