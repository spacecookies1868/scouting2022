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
          "n/a":"Not Attempted"
        },
        "defaultValue":"n/a"
      },
      "Stability": {
        "code":"stab",
        "title": "Stability",
        "type":"radio",
        "choices":{
          "Sturdy":"Sturdy<br>",
          "Swinging":"Swinging<br>",
          "Barely On":"Barely On<br>",
          "Failed":"Failed, on the ground in pieces<br>",
          "n/a":"No Climb"
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
          "Best":"Shooting was significantly affected<br>",
          "Good":"Was slowed down<br>",
          "Bad Affected":"Not Affected<br>",
          "n/a":"Did not get defended"
        },
        "defaultValue":"n/a"
      },
      "Defense Skill": {
        "code":"dr",
        "title": "Defense Skill",
        "type":"radio",
        "choices":{
          "Best":"Pushed robot around a lot, affected shooting<br>",
          "Good":"Slowed robot down<br>",
          "Bad":"Not Effective<br>",
          "n/a":"No defense"
        },
        "defaultValue":"n/a"
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
        "code":"ci",
        "title": "Connection Issues",
        "type":"radio",
        "choices":{
          "Significant":"Signficant (>30 sec) <br>",
          "Slight":"Slight (<10 sec) <br>",
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
        "maxSize":200
      }
    }
  }
}`;
