masterArray = [
  ['Mr. Travis. ', '8:25', '9:08. ', ' Social Studies.', 8, 25, 'zoommtg://us02web.zoom.us/join?action=join&confno=96599941343&pwd=cGVCcVUvekw0U2NwM1J3ajdWelJVUT09&zc=0&mcv=0.92.11227.0929&confid=dXNzPVZzNlladTNzMnVxaXZYMUp1R3U4SmxVWnMyOGlpaDVmdlRVMUVpb01EM1I3UGltVG5RN0J0Q3dydmZneVF3RU5lc0d5QmxrQWcxNWh2SmpLcFN4R1U2emJfQS5NVkJUYVZkWGx4UnR6YlduJnRpZD05NjU4OTllNzU2ZjY0N2UzYWIyM2RiNjMxODUwYTgyNw%3D%3D&browser=opera&t=1601238091579',],
  ['Mr. Daniel. ', '9:12', '9:55. ', ' Academy Connect.', 9, 12, 'zoommtg://us02web.zoom.us/join?action=join&confno=4766955166&pwd=Z1F5OFRkY3hBcWpSaHpzRFpTbGxhQT09&zc=0&mcv=0.92.11227.0929&confid=dXNzPUxBdmF4NHR3VHFTMEFUejNQTEluTllHQkZvb2lKb1NVQkRLMzBXVFZFaTJxUWVTdHU3UmtYcENjWVRSNjNhc3hDMnBTOXloeDRIc2ZaVFRieERfOUJGbFEueC1KTW4yZS0waDdQN09ZUSZ0aWQ9OTY1ODk5ZTc1NmY2NDdlM2FiMjNkYjYzMTg1MGE4Mjc%3D&browser=opera&t=1601059272231'],
  ['Ms. Watts. ', '9:59', '11:29. ', ' GT ILA.', 9, 59, 'zoommtg://us02web.zoom.us/join?action=join&confno=89035798132&pwd=K2JDUjlzZFN5bXJEbk9nbi9XaTRidz09&zc=0&mcv=0.92.11227.0929&confid=dXNzPWlwM1A4WEFyVW5wWWJadGwyR3ktbVM5aTZEWV9hb1c4ZkVuTXlDQVEwMmF1WW9aenJwQ3NDNTNiN21fYnJNREFEZ203bmY3NjRtTjJGbjBCZ0N5ZEJqejh3Zy43MHJHQ29XSzFIODVTZE5jJnRpZD05NjU4OTllNzU2ZjY0N2UzYWIyM2RiNjMxODUwYTgyNw%3D%3D&browser=opera&t=1601046028402'],
  ['Mr. Holzer. ', '12:03 ', '12:49. ', 'Band. ', 12, 3, 'zoommtg://zoom.us/join?action=join&confno=3740701861&pwd=WHVxY3dEQ3YxTUxsMHlsWFhGd0xmUT09&zc=0&mcv=0.92.11227.0929&confid=dXNzPTUzSkk2RlFSUW9rbVNabV9ZckRLZmJHZVdaVWpRdEtvTzVHOXlrWkx1TGlzU3kxbThod1dnME1VX0lucHE4czAzX0oxS3liZ2hQOU5zUS5vMWZkY0NoVW9BZ1V0THhyJnRpZD05NjU4OTllNzU2ZjY0N2UzYWIyM2RiNjMxODUwYTgyNw%3D%3D&browser=opera&t=1601059649894'],
  ['Ms. Boeke. ', '12:50', '1:33. ', '7th PAP math. ', 12, 50, 'zoommtg://zoom.us/join?action=join&confno=81460838057&pwd=N0RvU21JaHUwcmRRNStPVUpxK2NQZz09&zc=0&mcv=0.92.11227.0929&confid=dXNzPUVTN281ckZFRjlwcEdjcUVpTHRXb3hHUHFCdjY1d1puT1VCZ2F0aXhIZ2VrSExqSXpKM2oxZGEydVVPeEVoNkNFZFd2ZlhZYjlYVVZxSWcuZ2lKN3NSRm5VVzcwMzNaRiZ0aWQ9OTY1ODk5ZTc1NmY2NDdlM2FiMjNkYjYzMTg1MGE4Mjc%3D&browser=opera&t=1601059976555'],
  ['Coach Green. ', '2:13', '2:59. ', 'PE.', 2, 13, 'zoommtg://us02web.zoom.us/join?action=join&confno=86072371498&pwd=ejhFaUlFcUlJTFU1RCt5UDBBV0Vidz09&zc=0&mcv=0.92.11227.0929&confid=dXNzPS1wXy1IVXFENVVQRS1abDFvNG81Vm05dmlFRFRsV0k2cWluS0stODNwaGxTeUZaWUFzNGMyYTU0U3p2ZUhQNklrN092Z29tZkw3TDNiN0YzQkVUT3JOTnFDcFhuUEg0LlRtN2pISGYtX1VFWXFFaVkmdGlkPTkzYTQxNDA2YmU2YzRhMzU5ZTRmOTRjMTM3ZTQ2ZWNi&browser=chrome&t=1612835428095'],
  ['Ms. Kitchens. ', '3:00', '3:45. ', 'Science.', 3, 00, 'zoommtg://us02web.zoom.us/join?action=join&confno=85856057344&pwd=QXBBZEpkVmJBVnU1YjV6dmxBWU9hdz09&zc=0&mcv=0.92.11227.0929&confid=dXNzPVlaMDdxR1U4ZkRXbWd1MXYyS3ZxUFdRZ0ZuWnRLeDdSUEdZcUw0QXNZR0d4V3ExNFFidmwtUnNYLUtHSERyOVREVEFvZnRHY19wUlNpX1BYOTN5djVFUVdFQS43UlBPVUhIN0tTWTNsTnY5JnRpZD05NjU4OTllNzU2ZjY0N2UzYWIyM2RiNjMxODUwYTgyNw%3D%3D&browser=opera&t=1601060300255'],
] 
function reloadPage() {   window.location.href = winow.location.href   }
setTimeout(() => {reloadPage(); }, 1800000);
function autoOpen(Hour, Minute, link){ 
  var now = new Date();
  var Number = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Hour, Minute, 0, 0) - now; 
  if (Number <= 0){  Number = 86400000  }
  setTimeout(() => {  window.location.href = link  }, Number); 
}
for (var i = 0; i < masterArray.length; i++){ 
  $("main").append("<a href = " + masterArray[i][6] +">" + "<h3>" + masterArray[i][0] + masterArray[i][1] + " - " +masterArray[i][2] + masterArray[i][3] +"<h3>" + "</a>" + "<div style='line-height:5%;'>" /* this changes the size of the br because it seemed like too much with and too less without*/ + "<br>"+  "</div>")
  autoOpen(masterArray[i][4], masterArray[i][5], masterArray[i][6])
} 