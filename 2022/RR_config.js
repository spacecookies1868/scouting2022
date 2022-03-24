var config_data = `
{
  "title":"Scouting App 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"false"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022camb",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "p":"Practice<br>",
          "qm":"Quals<br>",
          "qf":"Quarterfinal<br>",
          "sf":"Semifinal<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"false"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"false"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"false"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "auton": {
      "- Upper Cargo Scored": {
        "code":"au",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Missed": {
        "code":"aum",
        "title": "Upper Cargo Missed",
        "type":"counter"
      },
      "- Lower Cargo Scored": {
        "code":"al",
        "title": "-- Lower Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Missed": {
        "code":"alm",
        "title": "Lower Cargo Missed",
        "type":"counter"
      },
       "Taxi": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
       "Auto Path": {
        "code":"ap",
        "title": "Auto Path",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "teleop": {
      "- Upper Cargo Scored": {
        "code":"tu",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Missed": {
        "code":"tm",
        "title": "Upper Cargo Missed",
        "type":"counter"
      },
      "- Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Missed": {
        "code":"tn",
        "title": "Lower Cargo Missed",
        "type":"counter"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
       "Climb Start Time": {
        "code":"cst",
        "title": "Climb Start Time",
        "type":"radio",
        "choices":{
          "Early":"Before endgame sound<br>",
          "At":"Right at endgame sound<br>",
          "Midway":"Midway through endgame<br>",
          "End":"Very end of endgame<br>",
          "n/a":"Not attempted"
        },
        "defaultValue":"n/a"
      },
      "Tandem Climb": {
        "code":"tc",
        "title": "Tandem Climb",
        "type":"bool"
      },
       "Ending Rung": {
        "code":"er",
        "title": "Ending Rung",
        "type":"radio",
        "choices":{
          "1 L":"Low<br>",
          "2 M":"Mid<br>",
          "3 H":"High<br>",
          "4 T":"Traversal<br>",
          "0 F": "Attempted but failed<br>",
          "0 n/a":"Not attempted"
        },
        "defaultValue":"0 n/a"
      },
      "Stability": {
        "code":"sta",
        "title": "Stability",
        "type":"radio",
        "choices":{
          "Stable":"Stable<br>",
          "Swing":"Wild swing<br>",
          "Between":"Caught between two rungs<br>",
          "Fell as Moving":"Fell off when moving to higher rung<br>",
          "Fell":"Fell off the rung<br>",
          "n/a":"Not attempted"
          },
        "defaultValue":"n/a"
        }
    },
    "postmatch": {
      "Cargo Loading": {
        "code":"cl",
        "title": "Pick up Cargo where",
        "type":"radio",
        "choices":{
          "G":"Ground<br>",
          "H":"Human player<br>",
          "B":"Both<br>",
          "n/a":"Not attempted"
        },
        "defaultValue":"G"
      },
      "Avoiding Opponent Defense": {
        "code":"da",
        "title": "Avoiding Opponent Defense",
        "type":"radio",
        "choices":{
          "S&I":"Both their shooting and intaking were affected<br>",
          "I":"Intaking was affected<br>",
          "S":"Shooting was affected<br>",
          "Slowed":"Was just generally slowed down<br>",
          "Bad":"Not affected, cycles were unchanged<br>",
          "n/a":"Did not get defended"
        },
        "defaultValue":"n/a"
      },
      "Own Defense Skill": {
        "code":"dr",
        "title": "Defense Skill",
        "type":"radio",
        "choices":{
          "S&I":"Impeded opponent intaking and shooting<br>",
          "I":"Significantly affected intake cycles<br>",
          "S":"Affected shooting accuracy<br>",
          "Slowed":"Just slowed them down<br>",
          "Bad":"Was ineffective<br>",
          "n/a":"Did not play defense"
        },
        "defaultValue":"n/a"
      },
      "Intake Skill": {
        "code":"is",
        "title": "Intake Skill",
        "type":"radio",
        "choices":{
          "Great":"Touch it, own it<br>",
          "Mid":"Missed a few<br>",
          "Bad":"Struggled<br>",
          "n/a":"Did not intake"
        },
        "defaultValue":"n/a"
      },
     "Connection Issues": {
        "code":"rm",
        "title": "Connection Issues",
        "type":"radio",
        "choices":{
          "Dead":"Dead <br>",
          ">30":">30 seconds <br>",
          "<30":"<30 seconds <br>",
          "n/a":"None"
        },
        "defaultValue":"n/a"
      },
      "Tipped": {
        "code":"to",
        "title": "Tipped Over",
        "type":"bool"
      },
      "Suspected Foul": {
        "code":"cf",
        "title": "Card Foul",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":20,
        "maxSize":500
      }
    }
  }
}`;
