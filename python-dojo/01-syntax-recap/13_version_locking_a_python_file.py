import sys

# NOTE: `sys.version_info` gets this information from the interpreter that is
# running this file

if sys.version_info == (3, 11):
    raise RuntimeError("This script cannot run with Python 3.11")

print("Install successful")
