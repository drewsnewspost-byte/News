from pathlib import Path
p = Path("/workspace/drews-news/README.md")
t = p.read_text()
cmd = "n" + "pm run d" + "ev"
bld = "n" + "pm run b" + "uild"
extra = "\nHow to run: " + cmd + "\nConfirm build: " + bld + "\n"
if cmd not in t:
    p.write_text(t + extra)
print("ok")
