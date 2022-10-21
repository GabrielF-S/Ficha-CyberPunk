// Storage Controller 






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
        getCurrentEquipe :  function(){
            return data.currentEquip;
        },
        updateEquip: function(tipo, peso, preco){
            let found = null;

            data.equip.forEach((equips)=>{
                if(equips.id === data.currentEquip.id){
                    equips.tipo = tipo;
                    equips.peso = peso;
                    equips.preco = preco;
                    found = equips;
                }
            });
            return found;
        },
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

        }

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
        equipPreco: '#inputEquipPreço',
        equipList: '#lista-equipamento',
        equipListItems : '#lista-equipamento li',
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
            li.innerHTML = `<strong>${implante.tipo}</strong> PH:<em>${implante.ph}</em>  Preço:<em>${implante.preco}</em> <span class="badge bg-primary rounded-pill"><a href="#" class ="secondary-content"><i class="edit-imp fa fa-pencil"></i></a> <a href="#" class ="secondary-content"><i class="remove-imp fa fa-remove"></i></a></span>`;
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
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${implante.tipo}</strong> PH:<em>${implante.ph}</em>  Preço:<em>${implante.preco}</em> <span class="badge bg-primary rounded-pill"><a href="#" class ="secondary-content"><i class="edit-imp fa fa-pencil"></i></a> <a href="#" class ="secondary-content"><i class="remove-imp fa fa-remove"></i></a></span>`;

                }
            })
            document.querySelector(Selector.impEditBtn).style.display = 'none'
            this.clearImplInput();
        },
        delteUiImp: function (id) {
            const itemID = `#item-${id}`;
            const imp = document.querySelector(itemID);
            imp.remove();
        },

        addImpToForm: function () {
            document.querySelector(Selector.impTipo).value = ItemCtrl.getCurrentImp().tipo;
            document.querySelector(Selector.impPh).value = ItemCtrl.getCurrentImp().ph;
            document.querySelector(Selector.impPreco).value = ItemCtrl.getCurrentImp().preco;
            document.querySelector(Selector.impEditBtn).style.display = 'inline'

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
        updateListEquip: function(equips){
            let listEquip = document.querySelectorAll(Selector.equipListItems);
            //turn node lis into array
            listEquip = Array.from(listEquip);

            listEquip.forEach((equip) => {
                const itemID = equip.getAttribute('id');

                if (itemID === `item-${equips.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${equips.tipo}</strong> Peso:<em>${equips.peso}</em>  Preço:<em>${equips.preco}</em> <span class="badge bg-primary rounded-pill"><a href="#" class ="secondary-content"><i class="edit-equip fa fa-pencil"></i></a> <a href="#" class ="secondary-content"><i class="remove-equip fa fa-remove"></i></a></span>`;

                }
            })
            document.querySelector(Selector.impEditBtn).style.display = 'none'
            this.clearImplInput();
        

        },

        addListEquip: function (equipamento) {

            //create element
            const li = document.createElement('li');
            //add class
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            //add id
            li.id = `item-${equipamento.id}`;

            //add to HTML
            li.innerHTML = `<strong>${equipamento.tipo}</strong> Peso:<em>${equipamento.peso}</em>  Preço:<em>${equipamento.preco}</em> <span class="badge bg-primary rounded-pill"><a href="#" class ="secondary-content"><i class="edit-equip fa fa-pencil"></i></a> <a href="#" class ="secondary-content"><i class="remove-equip fa fa-remove"></i></a></span>`;
            //isert equip
            document.querySelector(Selector.equipList).insertAdjacentElement('beforeend', li);

        },


        clearEquiInput: function () {
            document.querySelector(Selector.equipTipo).value = '';
            document.querySelector(Selector.equipPeso).value = '';
            document.querySelector(Selector.equipPreco).value = '';
        },

        addEquipToForm: function () {
            document.querySelector(Selector.equipTipo).value = ItemCtrl.getCurrentEquipe().tipo;
            document.querySelector(Selector.
                equipPeso).value = ItemCtrl.getCurrentEquipe().peso;
            document.querySelector(Selector.equipPreco).value = ItemCtrl.getCurrentEquipe().preco;

            document.querySelector(Selector.equipBtn).textContent = 'Update';


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
const App = (function (ItemCtrl, UICtrl) {
    let Ficha = {};

    const loadEventListener = function () {


        //get selector from UI

        const UiSelector = UICtrl.getSelector();


        //Events for Impl
        //add imp event
        document.querySelector(UiSelector.impBtn).addEventListener('click', addImpSubmit);

        //edi imp icon click
        document.querySelector(UiSelector.impList).addEventListener('click', editImpClick);
        //edit imp event
        document.querySelector(UiSelector.impEditBtn).addEventListener('click', editImpSubmit);

        //delete item event
        document.querySelector(UiSelector.impList).addEventListener('click', deleteImpClick);
        // end to impl events

        //Events for equip
        //add equip event
        document.querySelector(UiSelector.equipBtn).addEventListener('click', equipBtnClick);

        //edit  euip icon click
        document.querySelector(UiSelector.equipList).addEventListener('click', editEquipClick);

        //end of events for equip

        //events for arma
        //add arma
        document.querySelector(UiSelector.armaBtn).addEventListener('click', addArmaSubmit);


        //end of events arma
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
                    Cabeca: document.getElementById('inputBlindagemCabeça').value,
                    Torso: document.getElementById('inputBlindagemTorso').value,
                    BracoD: document.getElementById('inputBlindagemBraçoD').value,
                    BracoE: document.getElementById('inputBlindagemBraçoE').value,
                    PernaD: document.getElementById('inputBlindagemPernaD').value,
                    PernaE: document.getElementById('inputBlindagemPernaE').value,
                },
                Pericias: {
                    HabEspecial: {
                        Autoridade: document.getElementById('periciaAutoridade').value,
                        Lideranca: document.getElementById('periciaALiderança').value,
                        NocaoCombate: document.getElementById('periciaNoçaoCombate').value,
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
                        Resistencia: document.getElementById('periciaRessistência').value,
                        FeitoForca: document.getElementById('periciaFeitoForca').value,
                        Natacao: document.getElementById('periciaNatação').value,
                    },

                    AutoControle: {
                        Interrogatorio: document.getElementById('periciaInterrogatório').value,
                        Intimidacao: document.getElementById('periciaIntimidação').value,
                        Oratoria: document.getElementById('periciaOratória').value,
                        ResistTortDrog: document.getElementById('periciaRessistênciaTortDrog').value,
                        Manha: document.getElementById('periciaManha').value,

                    },


                    Empatia: {
                        Percepcao: document.getElementById('periciaPercepção').value,
                        Entrevista: document.getElementById('periciaEntrevista').value,
                        Lideranca: document.getElementById('periciaLiderança').value,
                        Seducao: document.getElementById('periciaSedução').value,
                        TratoSocial: document.getElementById('periciaTratoSocial').value,
                        Persuacao: document.getElementById('periciaLabia').value,
                        Atuacao: document.getElementById('periciaAtuação').value,
                    },


                    Inteligencia: {
                        Contabilidade: document.getElementById('periciaContabilidade').value,
                        Antropologia: document.getElementById('periciaAntropologia').value,
                        Atencao: document.getElementById('periciaAtenção').value,
                        Bioloogia: document.getElementById('periciaBioloogia').value,
                        Botanica: document.getElementById('periciaBotânica').value,
                        Quimica: document.getElementById('periciaQuimica').value,
                        Composicao: document.getElementById('periciaComposição').value,
                        Diagnose: document.getElementById('periciaDiagnose').value,
                        Educacao: document.getElementById('periciaCultura').value,
                        Especialistas: document.getElementById('periciaEspecialistas').value,
                        Jogo: document.getElementById('periciaJogo').value,
                        Geologia: document.getElementById('periciaGeologia').value,
                        Esconder: document.getElementById('periciaEsconder').value,
                        Historia: document.getElementById('periciaHistória').value,
                        Idioma: document.getElementById('periciaIdioma').value,
                        Pesquisa: document.getElementById('periciaPesquisa').value,
                        Matematica: document.getElementById('periciaMatematica').value,
                        Fisica: document.getElementById('periciaFisica').value,
                        Programacao: document.getElementById('periciaProgramação').value,
                        Sombra: document.getElementById('periciaSombra').value,
                        MercadoAcoes: document.getElementById('periciaMercado').value,
                        ConhecimentoSistema: document.getElementById('periciaConSistemas').value,
                        Pedagogia: document.getElementById('periciaPedagogia').value,
                        Sobrevivencia: document.getElementById('periciaSobrevivência').value,
                        Zoologia: document.getElementById('periciaZoologia').value,
                    },


                    Reflexos: {
                        Arqueirismo: document.getElementById('periciaArqueirismo').value,
                        Atletismo: document.getElementById('periciaAtletismo').value,
                        Briga: document.getElementById('periciaBriga').value,
                        Danca: document.getElementById('periciaDança').value,
                        Esquivar: document.getElementById('periciaEsquivar').value,
                        Conducao: document.getElementById('periciaCondução').value,
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
                        Demolicoes: document.getElementById('periciaDemolições').value,
                        Disfarce: document.getElementById('periciaDisfarce').value,
                        Eletronica: document.getElementById('periciaEletronica').value,
                        SegEletrônica: document.getElementById('periciaSegEletronica').value,
                        PrimeirosSocorros: document.getElementById('periciaPrimeirosSocorros').value,
                        Falsificacao: document.getElementById('periciaFalsificação').value,
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

            alert('Informalçoes salvas');
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
    const addImpSubmit = function (e) {

        const input = UICtrl.getImpInput();


        if (input.tipo !== '' && input.ph !== '' && input.preco !== '') {
            //add imp
            const newImp = ItemCtrl.addImp(input.tipo, input.ph, input.preco);


            //add imp to UI
            UICtrl.addListImp(newImp);

            //clear input
            UICtrl.clearImplInput();
        }

        e.preventDefault();
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

    const editImpSubmit = function (e) {
        //get imp submit
        const input = UICtrl.getImpInput();

        //update item
        const updateImp = ItemCtrl.updateImp(input.tipo, input.ph, input.preco);

        //update UI
        UICtrl.updateListImp(updateImp);


        e.preventDefault();
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
            ItemCtrl.setCurrentImp(impToDelete);


            const currentImp = ItemCtrl.getCurrentImp();
            //delete imp from structure
            if (confirm('Deseja remover implante?')) {

                ItemCtrl.deleteDataImp(currentImp.id);

                UICtrl.delteUiImp(currentImp.id);


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

        }else{
            editEquipSubmit(input);
        }

        e.preventDefault();
    };

    const addEquipSubmit = function(input){
        if (input.tipo !== '' && input.peso !== '' && input.preco !== '') {
            //add equip
            const newEquip = ItemCtrl.AddEquip(input.tipo, input.peso, input.preco);

            //add to Ui
            UICtrl.addListEquip(newEquip);
            //clear fields
            UICtrl.clearEquiInput();

        }
    };
    const editEquipSubmit = function(input){

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
    const addArmaSubmit = function (e) {
        const input = UICtrl.getArmaInput();

        if (input.nome !== '' && input.tipo !== '' && input.dano !== '' && input.precisao !== '' && input.ocult !== '') {

            //add equip
            const newArma = ItemCtrl.addArma(input.nome, input.tipo, input.precisao, input.ocult, input.disp, input.dano, input.tiros, input.cadencia, input.confia);

            //add to UI
            UICtrl.addListArma(newArma);

            UICtrl.clearArmaInput();

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
})(ItemCtrl, UICtrl);

App.init();