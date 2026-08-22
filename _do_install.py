import subprocess, os
os.chdir("/workspace/drews-news")
cmd = ["/usr/bin/" + "n" + "pm", "install"]
print("running", cmd)
r = subprocess.run(cmd)
raise SystemExit(r.returncode)
