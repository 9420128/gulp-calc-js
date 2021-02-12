export const productList = [
    {
        type: 'select',
        column: 'left',
        id: 'tip',
        label: 'Выберите тип',
        option: [
            { text: 'Лоджия', value: 1, data: '' },
            { text: 'Балкон', value: 2, data: 'b' },
        ],
    },
    {
        type: 'select',
        column: 'left',
        id: 'usluga_1',
        label: 'Отделка стен',
        option: [
            { text: 'Пластиковые панели', value: 1400, data: 'pp' },
            { text: 'Вагонка сорт А', value: 1400, data: 'va' },
            { text: 'Вагонка сорт Экстра', value: 1700, data: 'dv' },
        ],
    },
    {
        type: 'select',
        column: 'left',
        id: 'usluga_2',
        label: 'Отделка потолка',
        option: [
            { text: 'Пластиковые панели', value: 1400, data: 'pp' },
            { text: 'Пластиковая вагонка', value: 1200, data: 'pv' },
        ],
    },
    {
        type: 'select',
        column: 'left',
        id: 'usluga_3',
        label: 'Отделка пола',
        option: [
            { text: 'Линолеум', value: 2200, data: 'la' },
            { text: 'Ламинат', value: 2400, data: 'li' },
            { text: 'Кавролин', value: 2600, data: 'ka' },
            { text: 'Шпунт (Сосна)', value: 2200, data: 'de' },
        ],
    },
    {
        type: 'select',
        column: 'left',
        id: 'usluga_4',
        label: 'Отделка с улицы',
        option: [
            { text: 'Нет', value: 0, data: '' },
            { text: 'Пластиковая вагонка', value: 1300, data: '' },
            { text: 'Сайдинг', value: 1400, data: '' },
            { text: 'Профнастил', value: 1900, data: '' },
        ],
    },
    {
        type: 'select',
        column: 'right',
        id: 'opziya_1',
        label: 'Подоконник (мм)',
        option: [
            { text: 'Не нужен', value: 0, data: '' },
            { text: '100', value: 550, data: '' },
            { text: '150', value: 650, data: '' },
            { text: '200', value: 750, data: '' },
        ],
    },
    {
        type: 'checkbox',
        column: 'right',
        label: 'Утепление',
        input: [
            { text: 'Утепление ограждения', value: 500, data: 'utog' },
            { text: 'Утепление потолка', value: 500, data: 'utpot' },
            { text: 'Утепление пола', value: 500, data: 'utpol' },
        ],
    },
    {
        type: 'checkbox',
        column: 'right',
        label: 'Дополнительные опции',
        input: [
            { text: 'Освещение', value: 1800, data: 'osv' },
            { text: 'Сушилка для белья', value: 1000, data: 'sush' },
            { text: 'Демонтаж', value: 2000, data: 'dem' },
        ],
    },
]
