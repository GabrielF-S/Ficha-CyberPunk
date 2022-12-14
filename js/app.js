// Storage Controller 
const StorageCtrl = (function(){

    return{
        storeImplante: function(implantes){
            let impl;
            //check if any implante in LS
            if (localStorage.getItem('implantes')===null) {
                impl = [];
                //push new impl
                impl.push(implantes);
                //set in LS
                localStorage.setItem('implantes', JSON.stringify(impl));
            }
                
             else {
                //get what is already in LS
                impl = JSON.parse(localStorage.getItem('implantes'));
    
                //push new implante
                impl.push({implantes});
    
                //set again in ls
                localStorage.setItem('implantes', JSON.stringify(impl));
            }
        },
    
       
        deleteImpLs: function(id){

            let imp = JSON.parse(localStorage.getItem('implantes'));

            imp.forEach((implante, index)=>{
                if(implante.id === id){
                    imp.splice(index, 1)
                }
            })

            //set again in ls
            localStorage.setItem('implantes', JSON.stringify(imp));



        },
        storeEquipamento : function(equipamento){
            let equip;
            //check if any implante in LS
            if (localStorage.getItem('equipamentos')===null) {
                equip = [];
                //push new equip
                equip.push(equipamento);
                //set in LS
                localStorage.setItem('equipamentos', JSON.stringify(equip));
            
                
            } else {
                //get what is already in LS
                equip = JSON.parse(localStorage.getItem('equipamentos'));
    
                //push new implante
                equip.push(equipamento);
    
                //set again in ls
                localStorage.setItem('equipamentos', JSON.stringify(equip));
            }
    
        },
        deleteEquipLs: function(id){

            let equip = JSON.parse(localStorage.getItem('equipamentos'));

           
            equip.forEach((equips, index)=>{
                if(equips.id === id){
                    equip.splice(index, 1)
                }
            })

            localStorage.setItem('equipamentos', JSON.stringify(equip));

        },
        storeArma: function(arma){
            let arm;

            //check if any arma in ls
            if (localStorage.getItem('armas')=== null) {
                arm = [];

                arm.push(arma);

                localStorage.setItem('armas', JSON.stringify(arm));
                
            } else {
                
                arm = JSON.parse(localStorage.getItem('armas'));

                arm.push(arma);

                localStorage.setItem('armas', JSON.stringify(arm));
                
            }
        },

        deleteArmaLs: function(id){
            let armas = JSON.parse(localStorage.getItem('armas'));

            armas.forEach((arma, index)=>{
                if (arma.id === id) {
                    armas.splice(index, 1);
                }
            })

            localStorage.setItem('armas', JSON.stringify(armas));
        },
        storeFicha: function(ficha){
            let fi;
            if (localStorage.getItem('ficha'=== null)) {
                fi = [];

                fi.push(ficha);

                localStorage.setItem('ficha', JSON.stringify(fi));
                
            } else {
                
                fi = JSON.parse(localStorage.getItem('ficha'));

                fi.push(ficha);

                localStorage.setItem('ficha', JSON.stringify(fi));
                
            }

        }

    
    }
})();





//Item Controller
const ItemCtrl = (function () {

    //itens construtor
    const Ficha = function (nome, idade, papel, vit, pp) {
        this.nome = nome;
        this.idade = idade,
        this.papel = papel;
        this.vit = vit;
        this.pp = pp;

    }
    const Implante = function (id, tipo, ph, preco) {
        this.id = id;
        this.tipo = tipo;
        this.ph = ph;
        this.preco = preco;
    };
    const Equipamento = function (id, tipo, peso, preco) {
        this.id = id;
        this.tipo = tipo;
        this.peso = peso;
        this.preco = preco;
    };
    const Armas = function (id, nome, tipo, preci, ocult, dispo, dano, tiros, cdt, confi) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.preci = preci;
        this.ocult = ocult;
        this.dispo = dispo;
        this.dano = dano;
        this.tiros = tiros;
        this.cdt = cdt;
        this.confi = confi;

    };

    const data = {
        ficha: [],
        imp: [],
        equip: [],
        armas: [],
        currentImp: null,
        currentEquip: null,
        currentArma: null,


    }

    return {
        //add imp
        addImp: function (tipo, ph, preco) {
            //create id
            let ID;
            if (data.imp.length > 0) {
                //create id
                ID = data.imp[data.imp.length - 1].id + 1;
            } else {
                ID = 0;
            }


            //create new imp
            newImp = new Implante(ID, tipo, ph, preco);

            //add to imp array

            data.imp.push(newImp);

            return newImp;

        },
        //show qtd imp
        impQtd: function () {
            quantidade = data.imp.length;
            return quantidade
        },
        getImpById: function (id) {
            let found = null;
            data.imp.forEach((imp) => {
                if (imp.id === id) {
                    found = imp
                }
            })

            return found;

        },
        updateImp: function (tipo, ph, preco) {
            let found = null;
            data.imp.forEach((imp) => {
                if (imp.id === data.currentImp.id) {
                    imp.tipo = tipo;
                    imp.ph = ph;
                    imp.preco = preco;
                    found = imp;
                }
            });
            return found

        },
        deleteDataImp: function (id) {
            const ids = data.imp.map((imp) => {
                return imp.id;
            });

            //get index
            const index = ids.indexOf(id);

            //remove imp
            data.imp.splice(index, 1);

        },
        getCurrentImp: function () {
            return data.currentImp;
        },

        //set implante
        setCurrentImp: function (implante) {
            data.currentImp = implante;
        },
        //equip
        //add equip
        AddEquip: function (tipo, peso, preco) {
            //create id
            let ID;
            if (data.equip.length > 0) {
                //create id
                ID = data.equip[data.equip.length - 1].id + 1;
            } else {
                ID = 0;
            }

            //create new equip
            newEquip = new Equipamento(ID, tipo, peso, preco);

            //add to array
            data.equip.push(newEquip);


            return newEquip;

        },
        updateEquip: function (tipo, peso, preco) {
            let found = null;

            data.equip.forEach((equips) => {
                if (equips.id === data.currentEquip.id) {
                    equips.tipo = tipo;
                    equips.peso = peso;
                    equips.preco = preco;
                    found = equips;
                }
            });
            return found;
        },
        deleteDataEquip: function (id) {
            const ids = data.equip.map((equips) => {
                return equips.id;
            }
            );
            //get index
            const index = ids.indexOf(id);

            //remove equip
            data.equip.splice(index, 1);


        },
        getEquipById: function (id) {
            let found = null;
            data.equip.forEach((equips) => {
                if (equips.id === id) {
                    found = equips;
                }
            })
            return found;
        },
        setCurrentEquip: function (equipamento) {
            data.currentEquip = equipamento;

        },
        getCurrentEquipe: function () {
            return data.currentEquip;
        },
        //Armas
        //Add armas
        addArma: function (nome, tipo, precisao, ocult, disp, dano, tipo, cadencia, confia) {
            //create id
            let ID;
            if (data.armas.length > 0) {
                //create id
                ID = data.armas[data.armas.length - 1].id + 1;
            } else {
                ID = 0;
            }

            //create new arma

            newArma = new Armas(ID, nome, tipo, precisao, ocult, disp, dano, tipo, cadencia, confia);

            //add to array
            data.armas.push(newArma);

            return newArma;

        },
        setCurrentArma : function(arma){
            data.currentArma = arma;
        },
        getCurrentArma: function(){
            return data.currentArma;
        },

        //Update arma

        updateArma: function(nome, tipo, precisao, ocult, disp, dano, tiros, cadencia, confia){
            let found = null;
            data.armas.forEach((arma) => {
                if (arma.id === data.currentArma.id) {
                    arma.nome = nome; 
                    arma.tipo = tipo; 
                    arma.preci = precisao;//
                    arma.ocult = ocult; 
                    arma.dispo = disp; //
                    arma.dano = dano; 
                    arma.tiros = tiros; 
                    arma.cdt= cadencia; 
                    arma.confi = confia;//
                    found = arma;
                }
            });
            return found


        },
        //delete arma 
        deleteDataArma: function (id) {
            const ids = data.armas.map((arma) => {
                return arma.id;
            }
            );
            //get index
            const index = ids.indexOf(id);

            //remove equip
            data.armas.splice(index, 1);


        },

        getArmapById: function (id) {
            let found = null;
            data.armas.forEach((arma) => {
                if (arma.id === id) {
                    found = arma
                }
            })

            return found;

        },

    }



})();



//UI Controller
const UICtrl = (function () {
    const Selector = {
        impBtn: '#button-addon1',
        impEditBtn: '#button-addon4',
        impTipo: '#inputImplTipo',
        impPh: '#inputImpPh',
        impPreco: '#inputImpPreco',
        impList: '#lista-implante',
        impListItems: '#lista-implante li',
        numImp: '#numImplantes',
        equipBtn: '#button-addon2',
        equipTipo: '#inputEquipTipo',
        equipPeso: '#inputEquipPeso',
        equipPreco: '#inputEquipPre??o',
        equipList: '#lista-equipamento',
        equipListItems: '#lista-equipamento li',
        armaBtn: '#button-addon3',
        armaNome: '#inputArmaNome',
        armaTipo: '#inputArmaTipo',
        armaPrecisao: '#inputArmaPreci',
        armaOcult: '#inputArmaOcult',
        armaDisp: '#inputArmaDispon',
        armaDano: '#inputArmaDano',
        armaTiros: '#inputArmaTiros',
        armaCadencia: '#inputArmaCdT',
        armaConfia: '#inputArmaConfia',
        armaList: '#lista-arma',
        armaListItems: '#lista-arma li',
        salvarBtn: '#btnSalvar',

    }

    return {
        getSelector: function () {
            return Selector;
        },

        getImpInput: function () {
            return {
                tipo: document.querySelector(Selector.impTipo).value,
                ph: document.querySelector(Selector.impPh).value,
                preco: document.querySelector(Selector.impPreco).value,
            }
        },


        addListImp: function (implante) {
            //show the list
            //document.querySelector(Selector.impList).style.display = 'block';
            //create element
            const li = document.createElement('li');
            //add class
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            //add id
            li.id = `item-${implante.id}`;

            //add to HTML
            li.innerHTML = `<strong>${implante.tipo}</strong> PH:<em>${implante.ph}</em>  Pre??o:<em>${implante.preco}</em> <span class="badge bg-primary rounded-pill"><a href="#" class ="secondary-content"><i class="edit-imp fa fa-pencil"></i></a> <a href="#" class ="secondary-content"><i class="remove-imp fa fa-remove"></i></a></span>`;
            //isert imp
            document.querySelector(Selector.impList).insertAdjacentElement('beforeend', li);

            this.QtdImp();


        },
        QtdImp: function () {
            //uptade qtd implantes
            let quantidade = ItemCtrl.impQtd();

            document.querySelector(Selector.numImp).value = quantidade;
        },
        updateListImp: function (implante) {
            let listImp = document.querySelectorAll(Selector.impListItems);
            //turn node lis into array
            listImp = Array.from(listImp);

            listImp.forEach((imp) => {
                const itemID = imp.getAttribute('id');

                if (itemID === `item-${implante.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${implante.tipo}</strong> PH:<em>${implante.ph}</em>  Pre??o:<em>${implante.preco}</em> <span class="badge bg-primary rounded-pill"><a href="#" class ="secondary-content"><i class="edit-imp fa fa-pencil"></i></a> <a href="#" class ="secondary-content"><i class="remove-imp fa fa-remove"></i></a></span>`;

                }
            })
            document.querySelector(Selector.impBtn).textContent = 'Add';
            this.clearImplInput();
        },


        addImpToForm: function () {
            document.querySelector(Selector.impTipo).value = ItemCtrl.getCurrentImp().tipo;
            document.querySelector(Selector.impPh).value = ItemCtrl.getCurrentImp().ph;
            document.querySelector(Selector.impPreco).value = ItemCtrl.getCurrentImp().preco;
            document.querySelector(Selector.impBtn).textContent = 'Update';

        },
        deleteUiImp: function (id) {
            const itemID = `#item-${id}`;
            const imp = document.querySelector(itemID);
            imp.remove();
            if(Selector.impBtn.textContent !== 'Add'){
                document.querySelector(Selector.impBtn).textContent = 'Add';
            }
        },
        clearImplInput: function () {
            document.querySelector(Selector.impTipo).value = '';
            document.querySelector(Selector.impPh).value = '';
            document.querySelector(Selector.impPreco).value = '';
        },

        getEquipInput: function () {
            return {
                tipo: document.querySelector(Selector.equipTipo).value,
                peso: document.querySelector(Selector.equipPeso).value,
                preco: document.querySelector(Selector.equipPreco).value,
            }
        },
        updateListEquip: function (equips) {
            let listEquip = document.querySelectorAll(Selector.equipListItems);
            //turn node lis into array
            listEquip = Array.from(listEquip);

            listEquip.forEach((equip) => {
                const itemID = equip.getAttribute('id');

                if (itemID === `item-${equips.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${equips.tipo}</strong> Peso:<em>${equips.peso}</em>  Pre??o:<em>${equips.preco}</em> <span class="badge bg-primary rounded-pill"><a href="#" class ="secondary-content"><i class="edit-equip fa fa-pencil"></i></a> <a href="#" class ="secondary-content"><i class="remove-equip fa fa-remove"></i></a></span>`;

                }
            })
            document.querySelector(Selector.equipBtn).textContent = 'Add';
            this.clearEquiInput();


        },

        addListEquip: function (equipamento) {

            //create element
            const li = document.createElement('li');
            //add class
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            //add id
            li.id = `item-${equipamento.id}`;

            //add to HTML
            li.innerHTML = `<strong>${equipamento.tipo}</strong> Peso:<em>${equipamento.peso}</em>  Pre??o:<em>${equipamento.preco}</em> <span class="badge bg-primary rounded-pill"><a href="#" class ="secondary-content"><i class="edit-equip fa fa-pencil"></i></a> <a href="#" class ="secondary-content"><i class="remove-equip fa fa-remove"></i></a></span>`;
            //isert equip
            document.querySelector(Selector.equipList).insertAdjacentElement('beforeend', li);

        },

        addEquipToForm: function () {
            document.querySelector(Selector.equipTipo).value = ItemCtrl.getCurrentEquipe().tipo;
            document.querySelector(Selector.
                equipPeso).value = ItemCtrl.getCurrentEquipe().peso;
            document.querySelector(Selector.equipPreco).value = ItemCtrl.getCurrentEquipe().preco;

            document.querySelector(Selector.equipBtn).textContent = 'Update';


        },
        deleteUiEquip: function(id){
            const itemID = `#item-${id}`;
            const equip = document.querySelector(itemID);
            equip.remove();
            if(Selector.equipBtn.textContent !== 'Add'){
                document.querySelector(Selector.equipBtn).textContent = 'Add';
            }
        },
        clearEquiInput: function () {
            document.querySelector(Selector.equipTipo).value = '';
            document.querySelector(Selector.equipPeso).value = '';
            document.querySelector(Selector.equipPreco).value = '';
        },



        getArmaInput: function () {
            return {
                nome: document.querySelector(Selector.armaNome).value,
                tipo: document.querySelector(Selector.armaTipo).value,
                precisao: document.querySelector(Selector.armaPrecisao).value,
                ocult: document.querySelector(Selector.armaOcult).value,
                disp: document.querySelector(Selector.armaDisp).value,
                dano: document.querySelector(Selector.armaDano).value,
                tiros: document.querySelector(Selector.armaTiros).value,
                cadencia: document.querySelector(Selector.armaCadencia).value,
                confia: document.querySelector(Selector.armaConfia).value,
            }
        },

        addListArma: function (arma) {
            //create UI elemente
            const li = document.createElement('li');
            //add class
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            //add id
            li.id = `item-${arma.id}`;

            //add to html
            li.innerHTML = `<strong>${arma.nome}</strong> | <em>${arma.tipo}</em> | <em>${arma.preci}</em> | <em>${arma.ocult}</em> |  <em>${arma.dispo}</em> |  <em>${arma.dano}</em>  |  <em>${arma.tiros}</em>| <em>${arma.cdt}</em> | <em>${arma.confi}</em> <span class="badge bg-primary rounded-pill"><a href="#" class ="secondary-content"><i class="edit-arma fa fa-pencil"></i></a> <a href="#" class ="secondary-content"><i class="remove-arma fa fa-remove"></i></a></span>`;
            //isert equip
            document.querySelector(Selector.armaList).insertAdjacentElement('beforeend', li);

        },
        //update arma
        addArmaToForm: function(){
            document.querySelector(Selector.armaNome).value = ItemCtrl.getCurrentArma().nome;
            document.querySelector(Selector.armaTipo).value = ItemCtrl.getCurrentArma().tipo;
            document.querySelector(Selector.armaPrecisao).value = ItemCtrl.getCurrentArma().preci;
            document.querySelector(Selector.armaOcult).value = ItemCtrl.getCurrentArma().ocult;
            document.querySelector(Selector.armaDisp).value = ItemCtrl.getCurrentArma().dispo;
            document.querySelector(Selector.armaDano).value = ItemCtrl.getCurrentArma().dano;
            document.querySelector(Selector.armaTiros).value = ItemCtrl.getCurrentArma().tiros;
            document.querySelector(Selector.armaCadencia).value = ItemCtrl.getCurrentArma().cdt;
            document.querySelector(Selector.armaConfia).value = ItemCtrl.getCurrentArma().confi;

            document.querySelector(Selector.armaBtn).textContent = 'Update';

        },
        updateListArma: function(arma){
            let listArma = document.querySelectorAll(Selector.armaListItems);

           
            //turn node lis into array
            listArma = Array.from(listArma);

            listArma.forEach((armas) => {
                const itemID = armas.getAttribute('id');

                if (itemID === `item-${arma.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${arma.nome}</strong> | <em>${arma.tipo}</em> | <em>${arma.preci}</em> | <em>${arma.ocult}</em> |  <em>${arma.dispo}</em> |  <em>${arma.dano}</em>  |  <em>${arma.tiros}</em>| <em>${arma.cdt}</em> | <em>${arma.confi}</em> <span class="badge bg-primary rounded-pill"><a href="#" class ="secondary-content"><i class="edit-arma fa fa-pencil"></i></a> <a href="#" class ="secondary-content"><i class="remove-arma fa fa-remove"></i></a></span>`;

                }
            })
            document.querySelector(Selector.armaBtn).textContent = 'Add';
            this.clearArmaInput();
        },
        //delete arma
        deleteUiArma: function(id){
            const itemID = `#item-${id}`;
            const arma = document.querySelector(itemID);
            arma.remove();
            if(Selector.armaBtn.textContent !== 'Add'){
                document.querySelector(Selector.armaBtn).textContent = 'Add';
            }
        },

        clearArmaInput: function () {

            document.querySelector(Selector.armaNome).value = '';
            document.querySelector(Selector.armaTipo).value = '';
            document.querySelector(Selector.armaPrecisao).value = '';
            document.querySelector(Selector.armaOcult).value = '';
            document.querySelector(Selector.armaDisp).value = '';
            document.querySelector(Selector.armaDano).value = '';
            document.querySelector(Selector.armaTiros).value = '';
            document.querySelector(Selector.armaCadencia).value = '';
            document.querySelector(Selector.armaConfia).value = '';
        },


    }

})();


//App  Controller
const App = (function (ItemCtrl, UICtrl, StorageCtrl) {
    let Ficha = {};

    const loadEventListener = function () {


        //get selector from UI

        const UiSelector = UICtrl.getSelector();


        //Events for Impl
        //add imp event
        document.querySelector(UiSelector.impBtn).addEventListener('click', implBtnClick);

        //edi imp icon click
        document.querySelector(UiSelector.impList).addEventListener('click', editImpClick);
        //edit imp event

        //delete item event
        document.querySelector(UiSelector.impList).addEventListener('click', deleteImpClick);
        // end to impl events

        //Events for equip
        //add equip event
        document.querySelector(UiSelector.equipBtn).addEventListener('click', equipBtnClick);

        //edit  equip icon click
        document.querySelector(UiSelector.equipList).addEventListener('click', editEquipClick);

        //delete  equipe  event
        document.querySelector(UiSelector.equipList).addEventListener('click', deleteEquipClick)

        //end of events for equip

        //events for arma
        //add arma
        document.querySelector(UiSelector.armaBtn).addEventListener('click', armaBtnClick);

        //update arma
        document.querySelector(UiSelector.armaList).addEventListener('click', editArmapClick)

        //event to delete arma
        document.querySelector(UiSelector.armaList).addEventListener('click', deleteArmaClick)
        //end of events arma

        //event de salvar
        document.addEventListener('change', () => {


            document.querySelector(UiSelector.salvarBtn).style.display = 'inherit';

        });

        document.querySelector(UiSelector.salvarBtn).addEventListener('click', (e) => {
            Ficha = {
                Nome: document.getElementById('inputNome').value,
                Idade: document.getElementById('inputIdade').value,
                Papel: document.getElementById('inputPapel').value,
                Vit: document.getElementById('inputVIT').value,
                PontosPersonagem: document.getElementById('inputPontosPersonagem').value,
                Ed: document.getElementById('inputEd').value,
                Atributos: {
                    Int: document.getElementById('inputINT').value,
                    Ref: document.getElementById('inputREF').value,
                    TEC: document.getElementById('inputTEC').value,
                    AuCO: document.getElementById('inputAuCoN').value,
                    Atr: document.getElementById('inputATR').value,
                    Sort: document.getElementById('inputSOR').value,
                    Mov: document.getElementById('inputMOV').value,
                    TCO: document.getElementById('inputTCO').value,
                    EMP: document.getElementById('inputEMP').value,

                },
                Blindagem: {
                    Cabeca: document.getElementById('inputBlindagemCabe??a').value,
                    Torso: document.getElementById('inputBlindagemTorso').value,
                    BracoD: document.getElementById('inputBlindagemBra??oD').value,
                    BracoE: document.getElementById('inputBlindagemBra??oE').value,
                    PernaD: document.getElementById('inputBlindagemPernaD').value,
                    PernaE: document.getElementById('inputBlindagemPernaE').value,
                },
                Pericias: {
                    HabEspecial: {
                        Autoridade: document.getElementById('periciaAutoridade').value,
                        Lideranca: document.getElementById('periciaALideran??a').value,
                        NocaoCombate: document.getElementById('periciaNo??aoCombate').value,
                        Credibilidade: document.getElementById('periciaCredibilidade').value,
                        Familia: document.getElementById('periciaFamilia').value,
                        Interface: document.getElementById('periciaInterface').value,
                        ReparoImprov: document.getElementById('periciaReparoImprov').value,
                        TecMed: document.getElementById('periciaTecMedica').value,
                        Recurso: document.getElementById('periciaRecursos').value,
                        Negociar: document.getElementById('periciaNegociar').value,

                    },

                    Atratividade: {
                        CuidadoPessoal: document.getElementById('periciaCuidadosPessoais').value,
                        Estilo: document.getElementById('periciaEstilo').value,
                    },

                    TipoCorporal: {
                        Resistencia: document.getElementById('periciaRessist??ncia').value,
                        FeitoForca: document.getElementById('periciaFeitoForca').value,
                        Natacao: document.getElementById('periciaNata????o').value,
                    },

                    AutoControle: {
                        Interrogatorio: document.getElementById('periciaInterrogat??rio').value,
                        Intimidacao: document.getElementById('periciaIntimida????o').value,
                        Oratoria: document.getElementById('periciaOrat??ria').value,
                        ResistTortDrog: document.getElementById('periciaRessist??nciaTortDrog').value,
                        Manha: document.getElementById('periciaManha').value,

                    },


                    Empatia: {
                        Percepcao: document.getElementById('periciaPercep????o').value,
                        Entrevista: document.getElementById('periciaEntrevista').value,
                        Lideranca: document.getElementById('periciaLideran??a').value,
                        Seducao: document.getElementById('periciaSedu????o').value,
                        TratoSocial: document.getElementById('periciaTratoSocial').value,
                        Persuacao: document.getElementById('periciaLabia').value,
                        Atuacao: document.getElementById('periciaAtua????o').value,
                    },


                    Inteligencia: {
                        Contabilidade: document.getElementById('periciaContabilidade').value,
                        Antropologia: document.getElementById('periciaAntropologia').value,
                        Atencao: document.getElementById('periciaAten????o').value,
                        Bioloogia: document.getElementById('periciaBioloogia').value,
                        Botanica: document.getElementById('periciaBot??nica').value,
                        Quimica: document.getElementById('periciaQuimica').value,
                        Composicao: document.getElementById('periciaComposi????o').value,
                        Diagnose: document.getElementById('periciaDiagnose').value,
                        Educacao: document.getElementById('periciaCultura').value,
                        Especialistas: document.getElementById('periciaEspecialistas').value,
                        Jogo: document.getElementById('periciaJogo').value,
                        Geologia: document.getElementById('periciaGeologia').value,
                        Esconder: document.getElementById('periciaEsconder').value,
                        Historia: document.getElementById('periciaHist??ria').value,
                        Idioma: document.getElementById('periciaIdioma').value,
                        Pesquisa: document.getElementById('periciaPesquisa').value,
                        Matematica: document.getElementById('periciaMatematica').value,
                        Fisica: document.getElementById('periciaFisica').value,
                        Programacao: document.getElementById('periciaPrograma????o').value,
                        Sombra: document.getElementById('periciaSombra').value,
                        MercadoAcoes: document.getElementById('periciaMercado').value,
                        ConhecimentoSistema: document.getElementById('periciaConSistemas').value,
                        Pedagogia: document.getElementById('periciaPedagogia').value,
                        Sobrevivencia: document.getElementById('periciaSobreviv??ncia').value,
                        Zoologia: document.getElementById('periciaZoologia').value,
                    },


                    Reflexos: {
                        Arqueirismo: document.getElementById('periciaArqueirismo').value,
                        Atletismo: document.getElementById('periciaAtletismo').value,
                        Briga: document.getElementById('periciaBriga').value,
                        Danca: document.getElementById('periciaDan??a').value,
                        Esquivar: document.getElementById('periciaEsquivar').value,
                        Conducao: document.getElementById('periciaCondu????o').value,
                        Esgrima: document.getElementById('periciaEsgrima').value,
                        ArmasCurtas: document.getElementById('periciaArmaCurta').value,
                        ArmasPesadas: document.getElementById('periciaArmasPesadas').value,
                        ArtesMarciais: document.getElementById('periciaArtesMarciais').value,
                        LutaGrecoRomana: document.getElementById('periciaLutaRomana').value,
                        ArmasBrancas: document.getElementById('periciaArmasBrancas').value,
                        Motocicleta: document.getElementById('periciaMotocicleta').value,
                        OpMaquinaPesada: document.getElementById('periciaMaquinaPesada').value,
                        PilotagemGiro: document.getElementById('periciaPilotagemGiro').value,
                        PilotagemAsaFixa: document.getElementById('periciaPilotagemAsa').value,
                        PilotagemDirigivel: document.getElementById('periciaPilotagemDirigivel').value,
                        PilotagemVecImpVet: document.getElementById('periciaPilotagemVec').value,
                        Fuzil: document.getElementById('periciaFuzil').value,
                        Furtividade: document.getElementById('periciaFurtividade').value,
                        SubMetralhadora: document.getElementById('periciaSubMetralhadora').value,
                    },
                    Tecnica: {
                        AeroTec: document.getElementById('periciaAeroTec').value,
                        AVTec: document.getElementById('periciaAvTec').value,
                        TecnologiaBasica: document.getElementById('periciaTecnologiaBasica').value,
                        OpTanqCriogenio: document.getElementById('periciaOpTanque').value,
                        ProjetoCiberTerminal: document.getElementById('periciaCiberTerminal').value,
                        Cibertecnologia: document.getElementById('periciaCibertecnologia').value,
                        Demolicoes: document.getElementById('periciaDemoli????es').value,
                        Disfarce: document.getElementById('periciaDisfarce').value,
                        Eletronica: document.getElementById('periciaEletronica').value,
                        SegEletr??nica: document.getElementById('periciaSegEletronica').value,
                        PrimeirosSocorros: document.getElementById('periciaPrimeirosSocorros').value,
                        Falsificacao: document.getElementById('periciaFalsifica????o').value,
                        GitoTec: document.getElementById('periciaGitoTec').value,
                        PinturaDesenho: document.getElementById('periciaDesenho').value,
                        FotografiaFilmagem: document.getElementById('periciaFilmangem').value,
                        Medicamento: document.getElementById('periciaMedicamento').value,
                        Arrombamento: document.getElementById('periciaArrombamento').value,
                        Punga: document.getElementById('periciaPunga').value,
                        TocarInstrumento: document.getElementById('periciaTocar').value,
                        Armeiro: document.getElementById('periciaArmeiro').value,

                    }
                },
                REP: document.getElementById('inputREP').value,
                PE: document.getElementById('inputPE').value,
                Humanidade: document.getElementById('inputHumanidade').value,
            };

            alert('Informal??oes salvas');
            document.querySelector(UiSelector.salvarBtn).style.display = 'none';
            e.preventDefault();
        })



        // disable submit on press enter
        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }

        })


    };
    //Add Implantes
    const implBtnClick = function (e) {
        const input = UICtrl.getImpInput();

        let btn = document.querySelector(UICtrl.getSelector().impBtn);
        

        if (btn.textContent === 'Add') {
            addImpSubmit(input);

        } else {
            editImpSubmit(input);
        }

        e.preventDefault();
    };
    const addImpSubmit = function (input) {


        if (input.tipo !== '' && input.ph !== '' && input.preco !== '') {
            //add imp
            const newImp = ItemCtrl.addImp(input.tipo, input.ph, input.preco);


            //add imp to UI
            UICtrl.addListImp(newImp);
            //add to LS
            StorageCtrl.storeImplante(newImp);

            //clear input
            UICtrl.clearImplInput();
        }


    };
    //editar implantes
    const editImpClick = function (e) {
        if (e.target.classList.contains('edit-imp')) {
            //get impl list id
            const listId = e.target.parentNode.parentNode.parentNode.id;

            //break into an array
            const listIdArr = listId.split('-');

            //get atual id
            const id = parseInt(listIdArr[1]);

            //get imp

            const impToEdit = ItemCtrl.getImpById(id);
            //set current Impl
            ItemCtrl.setCurrentImp(impToEdit);

            //add imp to form
            UICtrl.addImpToForm();
        }
        e.preventDefault();
    };

    const editImpSubmit = function (input) {

        //update item
        const updateImp = ItemCtrl.updateImp(input.tipo, input.ph, input.preco);

        //update UI
        UICtrl.updateListImp(updateImp);



    };

    const deleteImpClick = function (e) {
        if (e.target.classList.contains('remove-imp')) {
            //get impl list id
            const listId = e.target.parentNode.parentNode.parentNode.id;

            //break into an array
            const listIdArr = listId.split('-');

            //get atual id
            const id = parseInt(listIdArr[1]);

            //get imp

            const impToDelete = ItemCtrl.getImpById(id);
            //set current Impl
            //ItemCtrl.setCurrentImp(impToDelete);


            //const currentImp = ItemCtrl.getCurrentImp();
            //delete imp from structure
            if (confirm('Deseja remover implante?')) {
                //deleete imp from data struture
                ItemCtrl.deleteDataImp(impToDelete.id);
                //delete imp from Ui
                UICtrl.deleteUiImp(impToDelete.id);

                //delete from LS
                StorageCtrl.deleteImpLs(impToDelete.id)
                // update imp account
                UICtrl.QtdImp();
            }


        }
        e.preventDefault();
    };
    //Add Equipamentos
    const equipBtnClick = function (e) {
        const input = UICtrl.getEquipInput();

        let btn = document.querySelector(UICtrl.getSelector().equipBtn);
        if (btn.textContent === 'Add') {

            addEquipSubmit(input);

        } else {
            editEquipSubmit(input);
        }

        e.preventDefault();
    };

    const addEquipSubmit = function (input) {
        if (input.tipo !== '' && input.peso !== '' && input.preco !== '') {
            //add equip
            const newEquip = ItemCtrl.AddEquip(input.tipo, input.peso, input.preco);

            //add to Ui
            UICtrl.addListEquip(newEquip);
            //add equio in LS
            StorageCtrl.storeEquipamento(newEquip);
            //clear fields
            UICtrl.clearEquiInput();

        }
    };
    const editEquipSubmit = function (input) {

        //update equip
        const updateEquip = ItemCtrl.updateEquip(input.tipo, input.peso, input.preco);

        //update UI
        UICtrl.updateListEquip(updateEquip);

    };

    const editEquipClick = function (e) {
        if (e.target.classList.contains('edit-equip')) {

            //get impl list id
            const listId = e.target.parentNode.parentNode.parentNode.id;

            //break into an array
            const listIdArr = listId.split('-');

            //get atual id
            const id = parseInt(listIdArr[1]);

            //get equip
            const equipToEdit = ItemCtrl.getEquipById(id);

            //set current equip
            ItemCtrl.setCurrentEquip(equipToEdit);

            //add equip to form
            UICtrl.addEquipToForm();


        }
        e.preventDefault();
    };
    const deleteEquipClick = function (e) {
        if (e.target.classList.contains('remove-equip')) {
            //get equip list id
            const listId = e.target.parentNode.parentNode.parentNode.id;

            //break into an array
            const listIdArr = listId.split('-');

            //get atual id
            const id = parseInt(listIdArr[1]);


            //get equip

            const equipToDelete = ItemCtrl.getEquipById(id);

          
            if (confirm('Deseja remover Equipamento?')) {
                //deleete equipe from data struture
                ItemCtrl.deleteDataEquip(equipToDelete.id);
                //delete equip from Ui
                UICtrl.deleteUiEquip(equipToDelete.id);

                //deleete from LS
                StorageCtrl.deleteEquipLs(equipToDelete.id);
            }



        }


        e.preventDefault();
    }

    //armas
    //listener btn
    const armaBtnClick = function(e){
        const input = UICtrl.getArmaInput();

        let btn = document.querySelector(UICtrl.getSelector().armaBtn);
        if (btn.textContent === 'Add') {
            addArmaSubmit(input);

        } else {
            editArmaSubmit(input);
        }

        e.preventDefault();
    }
    //add armas
    const addArmaSubmit = function (e) {
        const input = UICtrl.getArmaInput();

        if (input.nome !== '' && input.tipo !== '' && input.dano !== '' && input.precisao !== '' && input.ocult !== '') {

            //add equip
            const newArma = ItemCtrl.addArma(input.nome, input.tipo, input.precisao, input.ocult, input.disp, input.dano, input.tiros, input.cadencia, input.confia);

            //add to UI
            UICtrl.addListArma(newArma);
            //add arma no LS
            StorageCtrl.storeArma(newArma);

            UICtrl.clearArmaInput();

        }

        
    };

    const editArmapClick = function(e){

        if (e.target.classList.contains('edit-arma')) {
            //get impl list id
            const listId = e.target.parentNode.parentNode.parentNode.id;

            //break into an array
            const listIdArr = listId.split('-');

            //get atual id
            const id = parseInt(listIdArr[1]);

            //get imp

            const armaToEdit = ItemCtrl.getArmapById(id);
            //set current Impl
            ItemCtrl.setCurrentArma(armaToEdit);

            //add imp to form
            UICtrl.addArmaToForm();
        }


        e.preventDefault();

    };
    const editArmaSubmit= function(input){
        //update item
        const updateArma = ItemCtrl.updateArma(input.nome, input.tipo, input.precisao, input.ocult, input.disp, input.dano, input.tiros, input.cadencia, input.confia);

        //update UI
        UICtrl.updateListArma(updateArma);


    };

    const deleteArmaClick = function(e){
        if(e.target.classList.contains('remove-arma')){
            //get arma list id
            const listId = e.target.parentNode.parentNode.parentNode.id;

            //break into an array
            const listIdArr = listId.split('-');

            //get atual id
            const id = parseInt(listIdArr[1]);

            //get arma

            const armaToDelete = ItemCtrl.getArmapById(id);

            //delete arma from structure
            if (confirm('Deseja remover arma?')) {
                //deleete arma from data struture
                ItemCtrl.deleteDataArma(armaToDelete.id);
                //delete arma from Ui
                UICtrl.deleteUiArma(armaToDelete.id);

                //delete from ls
                StorageCtrl.deleteArmaLs(armaToDelete.id);

                
            }


        }


        e.preventDefault();
    }


    //publi metod
    return {
        init: function () {
            loadEventListener();
        },
        getFicha: function () {
            return Ficha
        }
    }
})(ItemCtrl, UICtrl, StorageCtrl);

App.init();