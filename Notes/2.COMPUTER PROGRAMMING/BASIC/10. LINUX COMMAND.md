1. echo variable ---> use to print
2. ls   --->  show all item in directory
    - ls -a ---> show all item also hidden item.
    - ls -r ---> all item with subitem
    - ls -l ---> show all item with extra information
 
3. **mkdir "name"** --> create folder
4. **start . or open .** ---> open current dir in GUI
5. **cd "location"**  ---> change directory
    - **cd ..**  --->  back to the folder
    - **cd s:** ---> change drive to s
    - **cd hello/** ---> go to hello folder
6. **cat "file name"** --> read file
    - cat > "name" => "write "  ---> create & write
7. pwd ---> show current working directory 
8. touch "file_name"  ---> create file
9. cp "file1" "file2"  --->  copy containt file1 to file2
    - cp -r folder1 folder2  --->  folder1 copy inside folder2
10. mv source target ---> move file
       - mv file1 file2 ----> rename if file2 doesn't exist
 11. rm "filename"  ---> delete file
      - rm -r folder ---> delet folder
      - rmdir folder  ---> delete folder
 12. **df**  ---> disk space and more info
       **df -m** --->  show in mb
13. **du** ---> show folder space
14. head -n num "file" ---> show data of file num line form head
15. tail -n num "file"  ---> show data of file num line from tail
16. diff "file1" "file2"  --->  compare line by line
17. locate "file"  ---> find file
18. find folder ---> find folder

## Environment variable : 
  - environment variable are global system variable accessible by the all the processes/users running under (eg-cmd) operating system (os) , such as window , macos & linux.
  - environment variable are useful to store system wide values for example
      - PATH :
      - OS:
      - COMPUTERNAME ,USERNAME:
      - SystemRoot:
      - HOMEDRIVE , HOMEPATH:
   - In cmd we write any cmd like git or npm or other first check PATH variable 
     content folder content any executable file name the command then run 
	    - eg - cmd git init => find git.exe and run 
	    - echo $PATH ---> use to see PATH variable value & other env var value
##

[link with basic](BASIC)

