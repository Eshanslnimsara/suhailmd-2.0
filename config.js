const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_17_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMixcbiAgICAgICAgMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDgwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5LFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDU2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDExLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImM1VHRpdmZObURHemhMZXg1YnR1S29WUWQ3ZUVCZE40UGRRY2l0bGRNMGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImQxMHMtRXVYVGpLVzRmQlNNNGNPdHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmJiYzFkNzMtZGVmMi00MzlhLWI1YzctZjVmMGM3MTUxNzE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM2LFxuICAgICAgMTc5LFxuICAgICAgNDMsXG4gICAgICAxMjcsXG4gICAgICAxMTgsXG4gICAgICAzMCxcbiAgICAgIDY4LFxuICAgICAgMjA2LFxuICAgICAgNDEsXG4gICAgICAxNDgsXG4gICAgICAxODAsXG4gICAgICAyMDAsXG4gICAgICA0NyxcbiAgICAgIDIzMCxcbiAgICAgIDk1LFxuICAgICAgMjQ5LFxuICAgICAgNDAsXG4gICAgICAxOCxcbiAgICAgIDczLFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMjIyLFxuICAgICAgMjMsXG4gICAgICAyMyxcbiAgICAgIDE1NixcbiAgICAgIDEzMSxcbiAgICAgIDIyMixcbiAgICAgIDQxLFxuICAgICAgNTAsXG4gICAgICAxODMsXG4gICAgICAxNjQsXG4gICAgICAxNjUsXG4gICAgICA3OSxcbiAgICAgIDU1LFxuICAgICAgNzUsXG4gICAgICAxODAsXG4gICAgICA0MCxcbiAgICAgIDIwMCxcbiAgICAgIDI0OSxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRTWlgxOEg2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MzE1MDY3Mjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjA2MTU3NzY2Njk4NDg6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJFc2h1dXV1IW5ldmVyZGll8J+Si1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k2U3Q2OEpFT2VMNGJzR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV3BleUp0OVBTZGxrb2lGY3NFZEhNZUcwOE5CemkzTXRtOHhZR1RoT2xGWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQTmVrbmRaQVV4ZWdsMGhxZlJvYk10L3F6RndOektzRmtvQjR1VjhvZmpodm5qRENjbEFQSWNQNGZ4WFFPeW1FOExnUUcyeExkV0k5ZVIzREpteFdDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxVWl1MjRWY0o3azAyNUpGK0Z0dUZUbzV3cXAzSGQzbFpWYW5mazdBamI3WEI5WGRLSVRJNEdLWTB4QjM0TFo4N2NVTTRXS2F4S0pnNE5wWVh2ZVhoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0MzE1MDY3Mjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU5MzU0NjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGYWdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZhZy5qc29uIjogIntcImtleURhdGFcIjpcIjM1d3BKekdjWDhnaldxMTczUW44Nzc4TmY5YVhLZFNIRzRoNTJxbGhwZWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjUxNTM4ODY4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzM1OTMwNTQ3NjI5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
