export interface ForecastDto {
    list:    ListItem[];
    city:    City;
}
export interface City {
    name: string;
}

export interface ListItem {
    dt:         number;
    main:       Main;
    weather:    Weather[];
    dt_text:    string;
}

export interface Main {
    temp:       number;
    temp_min:   number;
    temp_max:   number;
    humidity:   number;
}

export interface Weather {
    icon:        string;
}