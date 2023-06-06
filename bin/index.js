#!/usr/bin/env node

const args = require("args");
const path = require("path");
const convert = require("../docxConverter");

const initialValues = {
  s: "./",
  source: "./",
  d: "./",
  destination: "./",
};
let source;
let destination;

args
  .option(["s", "source"], "The source folder to get the files from", "./")
  .option(
    ["d", "destination"],
    "The destination folder to convert the files to",
    "./"
  );

const flags = args.parse(process.argv);

if (args.sub.length === 2) {
  source = path.join(__dirname, args.sub[0]);
  destination = path.join(__dirname, args.sub[1]);
} else if (
  args.sub.length === 0 &&
  flags.source === initialValues.source &&
  flags.destination === initialValues.destination
) {
  source = path.dirname(__dirname);
  destination = path.dirname(__dirname) + "\\converted_files";
} else if (
  args.sub.length === 0 &&
  (flags.source !== initialValues.source ||
    flags.destination !== initialValues.destination)
) {
  source = path.join(__dirname, flags.source);
  destination = path.join(__dirname, flags.destination);
} else if (args.sub.length === 1) {
  source = path.join(__dirname, args.sub[0]);
  destination = path.join(__dirname, args.sub[0]) + "\\converted_files";
} else {
  console.error(
    "DocxConverter takes either zero or two arguments: source(s) and destination(d)"
  );
}

// console.log("source: " + source);
// console.log("destination: " + destination);
convert.convert(source, destination);
