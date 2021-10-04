class Aprendiz extends persona{
    constructor(nombre,apellido,programa, ficha);
    super(nombre,apellido);
    this._programa=programa;
    this._ficha=ficha;

    get programa(){
        return this._programa;
    }

    set programa(){
        this._programa=programa;
    }

    get ficha(){
        return this._ficha;
    }

    set ficha(){
        this._ficha=ficha;
    }

    const ob = new Aprendiz('Jususke','Jachimi','ADSO','2234040');
    crossOriginIsolated.log();



    
}