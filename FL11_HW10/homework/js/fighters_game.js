function Fighter(data) {
    let name = data.name;
    let damage = data.damage;
    let agility = data.agility;
    let hp = data.hp;
    let maxHp = data.hp;
    let wins = 0;
    let losses = 0;

    this.getName = function () {

        return name;
    };
    this.getDamage = function () {

        return damage;
    };
    this.getAgility = function () {

        return agility;
    };

    this.getHealth = function () {

        return hp;
    };

    this.dealDamage = function (damage) {
        if (hp > 0 && hp > damage) {
            hp -= damage;
        } else {
            hp = 0;
        }
    };

    this.heal = function (amountOfHealth) {
        hp += amountOfHealth;
        if (hp > maxHp) {
            hp = maxHp;
        }
        console.log(`${name} has HP: ${hp}`);
    };

    this.logCombatHistory = function () {
        console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
    };

    this.addWin = function () {
        wins += 1;
    };

    this.addLoss = function () {
        losses += 1;
    };

    this.attack = function (damagedFighter) {
        let maxAgility = 100;
        let probabilityOfCurrentAttack = maxAgility - damagedFighter.getAgility();
        let randomSuccess = Math.random() * maxAgility;
        if (probabilityOfCurrentAttack >= randomSuccess) {
            damagedFighter.dealDamage(damage);
            console.log(`${name} make ${damage} damage to ${damagedFighter.getName()}`);
        } else {
            console.log(`${name} attack missed`);
        }
        return probabilityOfCurrentAttack;
    }
}

function battle (fighter1, fighter2) {
    if (fighter1.getHealth() <= 0) {
        return console.log(`${fighter1.getName()} is dead and can't fight`);
    }
    if (fighter2.getHealth() <= 0) {
        return console.log(`${fighter2.getName()} is dead and can't fight`);
    }
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        if (fighter2.getHealth() > 0 && fighter1.getHealth() > 0) {
            fighter1.attack(fighter2);
        }
        if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter2.attack(fighter1);
        }
    }
    if (fighter1.getHealth() <= 0) {
        fighter1.addLoss();
    } else {
        fighter1.addWin();
    }
    if (fighter2.getHealth() <= 0) {
        fighter2.addLoss();
    } else {
        fighter2.addWin();
    }
}
