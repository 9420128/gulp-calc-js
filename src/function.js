import { productList } from './productList'

function select(block) {
    let html = ''
    block.option.forEach((item) => {
        html += `
        <option data-id="${item.data}" value="${item.value}">${item.text}</option>`
    })
    return `
        <label class="uk-form-label" for="${block.id}">${block.label}</label>
        <select id="${block.id}" class="uk-select">
           ${html}
        </select>`
}

function checkbox(block) {
    let html = ''
    block.input.forEach((item) => {
        html += `
        <label>
            <input
                class="uk-checkbox"
                type="checkbox"
                id="${item.data}"
                value="${item.value}"
            />${item.text}</label>`
    })
    return `
        <span class="uk-form-label">${block.label}</span>
        <div class="tm-label-wrap">
            ${html}
        </div>`
}

export function table(block) {
    let html = ''
    block.option.forEach((item) => {})
}

export const tamplates = {
    select,
    checkbox,
}

export function summ(e) {
    const $d = +document.querySelector('#d').value / 1000,
        $hp = +document.querySelector('#hp').value / 1000,
        $w = +document.querySelector('#w').value / 1000,
        $h = +document.querySelector('#h').value / 1000,
        $tip = document.querySelector('#tip'),
        $usluga_1 = document.querySelector('#usluga_1'),
        $usluga_2 = document.querySelector('#usluga_2'),
        $usluga_3 = document.querySelector('#usluga_3'),
        $usluga_4 = document.querySelector('#usluga_4'),
        $opziya_1 = document.querySelector('#opziya_1'),
        $utog = document.querySelector('#utog'),
        $utpot = document.querySelector('#utpot'),
        $utpol = document.querySelector('#utpol'),
        $osv = document.querySelector('#osv'),
        $sush = document.querySelector('#sush'),
        $dem = document.querySelector('#dem'),
        $itog = document.querySelector('#itog'),
        $gab = document.querySelector('.js-gab'),
        $ste = document.querySelector('.js-ste'),
        $stePot = document.querySelector('.js-pot'),
        $stePol = document.querySelector('.js-pol'),
        $steNum = document.querySelector('.js-steNum'),
        $steSum = document.querySelector('.js-steSum'),
        $tipHead = document.querySelector('.js-tip')

    let thisEl = $tip,
        tipText,
        table = []

    if (!!e) thisEl = e.target

    let steny,
        stenyS,
        ubka,
        pol,
        polS,
        potolok,
        potolokS,
        ulica,
        summUslugi,
        podok,
        podokS,
        utepl,
        dop

    if ($tip.value == 1) {
        ubka = $d * $hp
        steny = ($d + $w + $w) * $h
        podok = $d
        tipText = 'лоджии'
    } else if ($tip.value == 2) {
        ubka = ($d + $w + $w) * $hp
        steny = $d * $h
        podok = $d + $w + $w
        tipText = 'балкона'
    }

    potolok = $d * $w
    pol = potolok

    steny += ubka

    stenyS = steny * selectVal($usluga_1)[1]
    potolokS = potolok * selectVal($usluga_2)[1]
    potolokS += potolok * checkboxVal($utpot)
    polS = pol * selectVal($usluga_3)[1]
    polS += pol * checkboxVal($utpol)
    ulica = ubka * selectVal($usluga_4)[1]
    utepl = ubka * checkboxVal($utog)

    // dop uslugi
    podokS = podok * selectVal($opziya_1)[1]

    summUslugi =
        stenyS +
        potolokS +
        polS +
        ulica +
        podokS +
        utepl +
        checkboxVal($osv) +
        checkboxVal($sush) +
        checkboxVal($dem)

    // console.log(thisEL)

    $itog.value = Math.floor(summUslugi)
    selectImg(thisEl, $tip, $usluga_1, $usluga_2, $usluga_3)

    $tipHead.innerHTML = tipText
    $gab.innerHTML = `<b>Габариты ${tipText} (м.):</b> <br>
        Длина - ${$d.toFixed(1)} / 
        Ширина - ${$w.toFixed(1)} / 
        Высота - ${$h.toFixed(1)} / 
        Высота ограждения - ${$hp.toFixed(1)}`
    $ste.innerHTML = selectVal($usluga_1)[2]
    $stePot.innerHTML = selectVal($usluga_2)[2]
    $stePol.innerHTML = selectVal($usluga_3)[2]
    $steNum.innerHTML = `${steny.toFixed(1)} м/кв`
    $steSum.innerHTML = `${stenyS.toFixed()} р.`

    productList[1].num = steny
    productList[1].sum = stenyS

    productList[2].num = $d * $w
    productList[2].sum = potolok

    productList[3].num = $d * $w
    productList[3].sum = pol

    productList[4].num = ubka
    productList[4].sum = ulica

    productList[5].num = podok
    productList[5].sum = podokS

    productList[6].input[0].num = ubka
    productList[6].input[0].sum = utepl

    productList[6].input[1].num = potolok
    productList[6].input[1].sum = potolok * checkboxVal($utpot)

    productList[6].input[2].num = pol
    productList[6].input[2].sum = pol * checkboxVal($utpol)

    productList[7].input[0].num = ''
    productList[7].input[0].sum = checkboxVal($osv)

    productList[7].input[1].num = ''
    productList[7].input[1].sum = checkboxVal($sush)

    productList[7].input[2].num = ''
    productList[7].input[2].sum = checkboxVal($dem)
}

function selectVal(el) {
    const thisElem = el.options,
        n = thisElem.selectedIndex,
        selectId = thisElem[n].dataset.id,
        selectValue = thisElem[n].value,
        selectText = thisElem[n].text

    return [selectId, Number(selectValue), selectText]
}

function checkboxVal(el) {
    if (el.checked) {
        return Number(el.value)
    } else {
        return 0
    }
}

function selectImg(el, $tip, $usluga_1, $usluga_2, $usluga_3) {
    if (el.tagName == 'INPUT') return

    const id = el.id,
        selectId = selectVal(el)[0],
        $img = document.querySelector('#img img')

    let imgSRC,
        tip = selectVal($tip)[0],
        steni = selectVal($usluga_1)[0],
        potolok = selectVal($usluga_2)[0],
        pol = selectVal($usluga_3)[0]

    if (id == 'tip') {
        imgSRC = selectId + steni + potolok + pol
    } else if (id == 'usluga_1') {
        imgSRC = tip + selectId + potolok + pol
    } else if (id == 'usluga_2') {
        imgSRC = tip + steni + selectId + pol
    } else if (id == 'usluga_3') {
        imgSRC = tip + steni + potolok + selectId
    } else return

    $img.src = `http://www.balkon-spb.ru/calculator/${imgSRC}.png`
}
