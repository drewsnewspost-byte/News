import re
text = open("/workspace/drews-news/lib/stories.ts").read()
# crude pairs
slugs = re.findall(r'slug: "([^"]+)"', text)
statuses = re.findall(r'status: "([^"]+)"', text)
print("slugs", slugs)
print("statuses", statuses)
