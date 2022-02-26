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
        "defaultValue":"2022caoc",
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
       "Human Player Shot": {
        "code":"hp",
        "title": "Human Player Shot",
        "type":"counter"
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
      "Cargo Loading": {
        "code":"cl",
        "title": "Pick up Cargo where",
        "type":"radio",
        "choices":{
          "g":"Ground<br>",
          "h":"Human Player<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"g"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
      "Started Climb before Endgame": {
        "code":"be",
        "title": "Started climb before EndGame",
        "type":"bool"
      },
      "Tandem Climb": {
        "code":"tc",
        "title": "Tandem Climb",
        "type":"bool"
      },
      "Highest *Attempted* Climb": {
        "code":"hac",
        "title": "Highest *Attempted* Climb",
        "type":"radio",
        "choices":{
          "Low":"Low<br>",
          "Mid":"Mid<br>",
          "High":"High<br>",
          "Traversal":"Traversal<br>",
          "n/a":"Not attempted"
        },
        "defaultValue":"n/a"
      },
       "Ending Rung": {
        "code":"er",
        "title": "Ending Rung",
        "type":"radio",
        "choices":{
          "Low":"Low<br>",
          "Mid":"Mid<br>",
          "High":"High<br>",
          "Traversal":"Traversal<br>",
          "n/a":"Not attempted"
        },
        "defaultValue":"n/a"
      },
      "Stability": {
        "code":"stab",
        "title": "Stability",
        "type":"radio",
        "choices":{
          "Stable":"Stable<br>",
          "Minor Swing":"Controlled or minor swing<br>",
          "Wild Swing":"Wild swing<br>",
          "Hit Driver Station":"Hit driver station wall<br>",
          "Missed Rung":"Missed the next rung but didn't fall<br>",
          "Fell Off While Transitioning":"Fell off the rung when transitioning to higher rung<br>",
          "Fell Off Rung":"Fell off the rung<br>",
          "n/a":"Not attempted"
        },
        "defaultValue":"n/a"
      }
    },
    "postmatch": {
      "Avoiding Opponent Defense": {
        "code":"da",
        "title": "Avoiding Opponent Defense",
        "type":"radio",
        "choices":{
          "Both Shooting and Intaking Affected":"Both their shooting and intaking were affected<br>",
          "Intaking Affected":"Intaking was affected<br>",
          "Shooting Affected":"Shooting was affected<br>",
          "Slowed Down":"Was just generally slowed down<br>",
          "Not Affected":"Not affected, cycles were unchanged<br>",
          "n/a":"Did not get defended"
        },
        "defaultValue":"n/a"
      },
      "Own Defense Skill": {
        "code":"dr",
        "title": "Defense Skill",
        "type":"radio",
        "choices":{
          "Affected Both Shooting and Intaking":"Impeded opponent intaking and shooting<br>",
          "Affected Intake":"Significantly affected intake cycles<br>",
          "Affected Shooting":"Affected shooting accuracy<br>",
          "Slowed Them":"Just slowed them down<br>",
          "Ineffective":"Was ineffective<br>",
          "n/a":"Did not play defense"
        },
        "defaultValue":"n/a"
      },
      "Robot Defended, if Any": {
        "code":"rd",
        "title": "Robot Defended",
        "type":"text",
        "size":15,
        "maxSize":20
      },
      "Intake Skill": {
        "code":"is",
        "title": "Intake Skill",
        "type":"radio",
        "choices":{
          "Best":"Touch it, own it<br>",
          "Good":"Missed a few<br>",
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
        "size":15,
        "maxSize":500
      }
    }
  }
}`;
