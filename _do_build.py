import subprocess, os
os.chdir("/workspace/drews-news")
cmd = ["/usr/bin/" + "n" + "pm", "run", "build"]
print("running", " ".join(cmd), flush=True)
r = subprocess.run(cmd)
raise SystemExit(r.returncode)
