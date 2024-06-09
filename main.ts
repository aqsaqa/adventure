#! /usr/bin/env node
import inquirer from "inquirer";


//......................games variables...............
let enemies =["skeleton","zoombi","warrior","assassin"]
let maxEnemyhealth = 75
let enemyAttackDamageToHero = 25

//.....................players variable.................

let herohealth = 100
let attackdamageToEnemy =50
let numhealthPotion = 3
let healthPotionHealamount = 30
let healthPotionDropChance =50

//....................... while loop condition...........

let gameRunning= true
console.log("welcome to DeadZone!");

Game:
while (gameRunning){
    let enemyHealth = Math.floor(Math.random()* maxEnemyhealth + 1)
    let enemyindex = Math.floor(Math.random() * enemies.length)
    let enemy = enemies[enemyindex]

    console.log( `# ${enemy} has apperead #\n`);

    while (enemyHealth > 0){
        console.log(`Your Health: ${herohealth}`);
        console.log(`${enemy} health: ${enemyHealth}`);


        let options = await inquirer.prompt({
            name:"ans",
            type:"list",
            message:"what would you like to do?",
            choices:["1. Attack","2.Take Health promotion","3. Run"]
        })

        if(options.ans === "1. Attack"){
            let damagetoEnemy =Math.floor(Math.random() * attackdamageToEnemy + 1)  
            let damageToHero =Math.floor(Math.random() * enemyAttackDamageToHero + 1) 

            enemyHealth -= damagetoEnemy
            herohealth  -= damageToHero

            console.log(`you strike the ${enemy} for ${damagetoEnemy} `);
            console.log(`${enemy} strike you for ${damageToHero} damage.`);

            if(herohealth < 1){
                console.log("you have taken too much damage . you are too weak to continue.");
                break;
            }

        }

        else if(options.ans === "2. Take Health Potion"){
            if(numhealthPotion > 0){
                herohealth += healthPotionHealamount
                numhealthPotion --

                console.log(`you use health potion for ${healthPotionHealamount}`);
                console.log(` you now have ${herohealth} health`);
                console.log(`you have ${numhealthPotion} health potions left.`);
            }else{
                console.log(`you have no health potion left. defeat enemy to get health potion`);
            }
        }
        else if(options.ans === "3. Run"){
            console.log(`you run away from ${enemy}`);
            continue Game;
        }
    }
    if (herohealth < 1){
        console.log(`you are out from battle. you are to weak.`);
        break
    }

    console.log(`${enemy} was defeated`);
    console.log(`you have ${herohealth} health.`);
     let randomNumber = Math.floor(Math.random()* 100 + 1)
     if(randomNumber < healthPotionDropChance){
        numhealthPotion++

        console.log(` enemy give you health potion`);
        console.log(` your health is ${herohealth}`);
        console.log(`your health potion is ${numhealthPotion}`);
     }
     let userOption =await inquirer.prompt({
        name:"ans",
        type:"list",
        message:"what would you like to do now",
        choices:["1. continue","2. exit"]
     })
     if(userOption.ans === "1. continue"){
        console.log("you are continue on your advanture");
     }else{
        console.log("you sucessfully exit from deadzone");
     }
     console.log("Thank you for playing.\n");
}
