import json
import pprint

# open file and ignore error causing characters (emojis, etc)
with open('frontend_sbom', 'r', encoding='utf-8', errors='ignore') as file:
    cleaned_content = file.read()

# load as a json
frontend_data = json.loads(cleaned_content)

# open and load backend
with open("backend_sbom") as fp:
    backend_data = json.load(fp)

frontend_licenses = set()
_ = [frontend_licenses.add(x['license']['id']) for y in frontend_data['components'] if 'licenses' in y for x in y['licenses'] if 'license' in x and 'id' in x['license']]

backend_licenses = set()
_ = [backend_licenses.add(x['license']['id']) for y in backend_data['components'] if 'licenses' in y for x in y['licenses'] if 'license' in x and 'id' in x['license']]

print("frontend licenses:", frontend_licenses)
print("backend licenses:", backend_licenses)