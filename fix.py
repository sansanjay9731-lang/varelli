import glob, os

base_dir = '/Users/apple/.gemini/antigravity/scratch/varelli/src/app'
files = glob.glob(base_dir + '/**/*.tsx', recursive=True)
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    content = content.replace('dangerouslySetInnerHTML={__html:', 'dangerouslySetInnerHTML={{__html:')
    content = content.replace('Schema)} />', 'Schema)}} />')
    
    with open(f, 'w') as file:
        file.write(content)
print('Fixed files')
