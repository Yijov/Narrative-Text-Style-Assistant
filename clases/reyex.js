


let reyex= {

    //para dividir en silabas. trabaja mal para palabras con "rl" y "rn" en medio como "merlusa" = me-rlu-sa  y pierna = pie-rna debe ser corregido en el algoritmo
    syllableRegex: /([htdgpl]+(iai|iái|iau|iéi|ieu|ioi|iou|uai|uau|uéi)[rns]?|[clpbmr]+[oea](?=[íóeoa])|\sy\s|[^aeiouáóáéíú\s]{0,2}([óáéíú]|[aeiou]+(y?(?![aeiouóáíéú]+)|[óáéíú]?))(?:[^aeiouyáóáéíú]$|[^aeiouytp\s]{0,1}(?=[^aeiouyührlnáóáéíú]))?)/gi, 
    
    //para dividir en unidades métricas de poesía. no funciona bien con "lr" ni "rl" debe ser corregido en el algoritmo
    metricRegex : /[^aeiouyáóáéíú\s]{0,2}([óáéíú]|[aeiouyh]+[óáéíú]?)(?:[^aeiouyáóáéíú]$|[^aeiouytpd\s]{0,1}(?=[^aeiouyhrlnáóáéíú]))?/gi
}


module.exports= reyex;

