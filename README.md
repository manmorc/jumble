Solution for most of problems:



Watchman Error solution:

---
watchman watch-del-all && watchman shutdown-server

---


Packager stuck on starting solution:


---
sudo sysctl -w fs.inotify.max_user_watches=10000
npm start
---