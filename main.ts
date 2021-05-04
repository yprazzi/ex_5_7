input.onButtonPressed(Button.A, function () {
    if (croissant == true) {
        joueur += 1
    } else {
        joueur += -1
    }
    basic.showNumber(joueur)
})
input.onButtonPressed(Button.B, function () {
    coup += 1
    if (jeux > joueur) {
        basic.showString("+")
        croissant = true
        basic.pause(200)
        basic.showNumber(joueur)
    }
    if (jeux < joueur) {
        basic.showString("-")
        croissant = false
        basic.pause(200)
        basic.showNumber(joueur)
    }
    if (joueur == jeux) {
        basic.showString("bravo ! Trouvé en " + coup)
    }
})
let croissant = false
let coup = 0
let joueur = 0
let jeux = 0
jeux = randint(1, 20)
joueur = 0
coup = 0
croissant = true
basic.showNumber(joueur)
