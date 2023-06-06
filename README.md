# DocxMultiFileConverter

Convert multiple .docx files to .html

## Description

DocxMultFileConverter is used to Convert multiple Word documents from docx to plain HTML using Mammoth

## Getting started

### Installing

```
npm install docxmultifileconverter
```

### Usage

Basic command to run DocxMultiFileConverter, it will use the current directory as the source directory and will write the html files in <source>\converted_files

```
npx multiconvert
```

Change the source and destination folders with the following command

```
npx multiconvert --source=<sourcefolder> --destination=<destinationfolder>
```

or simplify it

```
npx multiconvert <sourcefolder> <destinationfolder>
```

## Acknowledgements

### Dependencies

- [Mammoth](https://github.com/mwilliamson/mammoth.js)
- [Args](https://github.com/leo/args)

### Authors

- Kees Kemper

## Version History

- 0.1 Initial Release
