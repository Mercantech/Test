# TDD — Test Driven Development

![TDD-cyklussen: Red → Green → Refactor](/images/tdd-cycle.png)

## Hvad er TDD?

TDD står for **Test Driven Development** — en udviklingsmetode hvor du:

1. **Skriver testen først** (den fejler — rød)
2. **Skriver den mindst mulige kode**, så testen bliver grøn
3. **Refaktorerer** koden uden at ændre adfærden

Dette kaldes **Red → Green → Refactor**.

## Hvorfor giver TDD mening?

TDD tvinger dig til at tænke over:

- Hvad skal metoden *kunne*?
- Hvilket input og output forventes?
- Hvilke edge cases findes der?

...før du skriver implementeringen.

Det betyder ofte:

- Mindre komplekse metoder
- Klarere ansvar pr. klasse
- Færre "magiske" side effects

## Hvornår er TDD en god idé?

TDD fungerer bedst når:

- Logikken er **forretningskritisk**
- Metoden er **ren** (ingen I/O, netværk, DB)
- Du er i tvivl om designet og vil lade testen forme API'et

Eksempler: valideringslogik, beregninger, mapping, auth- og regelbaseret logik.

## Hvornår giver TDD *ikke* mening?

TDD er **ikke et krav** og passer ikke altid til:

- UI-kode
- CRUD-controllers
- Kode med meget infrastruktur (DB, mail, eksterne services)
- Eksperimenterende kode hvor kravene ændrer sig hurtigt

::: tip
Her er **tests efterfølgende** ofte mere realistisk.
:::

## TDD er et værktøj — ikke en religion

- Du **skal ikke** nødvendigvis følge TDD
- Du **må gerne** skrive tests efterfølgende
- Men: prøv gerne TDD på én mindre del af systemet

Formålet er at forstå tankegangen og opleve forskellen på "kode først" vs. "adfærd først".
