let vitorias = 200
let derrotas = 15
let resultado = calcularNivel(vitorias, derrotas)
console.log(resultado)
function calcularNivel(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    let nivel

    if (vitorias < 10) {
        nivel = "Ferro"
    } else if (vitorias <= 20) {
        nivel = "Bronze"
    } else if (vitorias <= 50) {
        nivel = "Prata"
    } else if (vitorias <= 80) {
        nivel = "Ouro"
    } else if (vitorias <= 90) {
        nivel = "Diamante"
    } else if (vitorias <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem saldo de ${saldo} vitórias e está no nível de ${nivel}`

}