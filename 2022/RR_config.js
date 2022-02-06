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
        "defaultValue":"2022flwp",
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
      "Taxi": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "-- Upper Cargo Scored": {
        "code":"au",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Missed": {
        "code":"aum",
        "title": "Upper Cargo Missed",
        "type":"counter"
      },
      "-- Lower Cargo Scored": {
        "code":"al",
        "title": "-- Lower Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Missed": {
        "code":"alm",
        "title": "Lower Cargo Missed",
        "type":"counter"
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
      "-- Upper Cargo Scored": {
        "code":"tu",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Missed": {
        "code":"tm",
        "title": "Upper Cargo Missed",
        "type":"counter"
      },
      "-- Lower Cargo Scored": {
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
          "h":"Human Player<br>",
          "g":"Ground<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
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
        "code":"be",
        "title": "Tandem Climb",
        "type":"bool"
      },
      "Highest Attempted Climb": {
        "code":"hac",
        "title": "Highest Attempted Climb",
        "type":"radio",
        "choices":{
          "5":"Low<br>",
          "6":"Mid<br>",
          "7":"High<br>",
          "8":"Traversal<br>",
          "y":"Not Attempted"
        },
        "defaultValue":"y"
      },
      "Stability": {
        "code":"stab",
        "title": "Stability",
        "type":"radio",
        "choices":{
          "21":"Sturdy<br>",
          "22":"Swinging<br>",
          "23":"Barely On<br>",
          "24":"Failed, on the ground in pieces<br>",
          "25":"No Climb"
        },
        "defaultValue":"25"
      }
    },
    "postmatch": {
      "Defended Against": {
        "code":"da",
        "title": "Defended Against",
        "type":"radio",
        "choices":{
          "n":"Affected in shooting<br>",
          "a":"Affected in movement<br>",
          "v":"Not Affected<br>",
          "x":"Did not get defended"
        },
        "defaultValue":"x"
      },
      "Own Defense": {
        "code":"dr",
        "title": "Own Defense",
        "type":"radio",
        "choices":{
          "9":"Slowed robot down<br>",
          "10":"Pushed robot around a lot, affected shooting<br>",
          "11":"Not Effective<br>",
          "12":"No defense"
        },
        "defaultValue":"12"
      },
      "Intake Accuracy": {
        "code":"ia",
        "title": "Intake Accuracy",
        "type":"radio",
        "choices":{
          "18":"Touch it, own it<br>",
          "19":"Missed a few<br>",
          "20":"Struggled<br>",
          "x":"Did not intake"
        },
        "defaultValue":"x"
      },
     "Connection Issues": {
        "code":"ci",
        "title": "Connection Issues",
        "type":"radio",
        "choices":{
          "w":"Signficant<br>",
          "s":"Slight<br>",
          "z":"None"
        },
        "defaultValue":"z"
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
        "maxSize":100
      }
    }
  }
}`;
