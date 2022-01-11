const db = require("quick.db")
module.exports = {

    name: "24/7",
    vcOnly: true,
    aliases: ["24*7","247","autorejoin","aj"],
    
	     run: async ( client,message,args) => {
        const msg = message;
        
        let x = db.get(`247_${message.guild.id}`)
        if(x == true) {
            db.set(`247_${message.guild.id}`, false)
          msg.channel.send("**Disabled** 24/7")
        }
        else if(!x){
            db.set(`247_${message.guild.id}`, true)
            msg.channel.send("**Enabled** 24/7")
        }

    }

}