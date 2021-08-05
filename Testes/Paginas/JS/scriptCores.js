var quadrado = document.getElementById('quadrado')
        var botao = document.getElementById('divButton')
        var cores = document.getElementById('inCores')
        var button = document.getElementsByTagName('button')[0]
        var showOff = false

        function show(){
            if (showOff){
                cores.style.display = 'block'
                botao.style.marginBottom = '10px'
                showOff = false
                button.innerText = 'Esconder'
            }else{
                cores.style.display = 'none'
                showOff = true
                button.innerText = 'Mostrar'
            }
        }

        function mudarCor(cor){
            switch (cor){
                case red:
                quadrado.style.backgroundColor = 'red'    
                break

                case blue:
                quadrado.style.backgroundColor = 'blue'    
                break

                case green:
                quadrado.style.backgroundColor = 'green'    
                break

                case yellow:
                quadrado.style.backgroundColor = 'yellow'    
                break

                case black:
                quadrado.style.backgroundColor = 'black'    
                break

                case orange:
                quadrado.style.backgroundColor = 'orange'    
                break

                case purple:
                quadrado.style.backgroundColor = 'purple'    
                break

                case pink:
                quadrado.style.backgroundColor = 'Pink'
                break

                case brown:
                quadrado.style.backgroundColor = 'Brown'
                break
                
                case white:
                quadrado.style.backgroundColor = 'white'
                break
            }
        }