<?php
namespace Classes;

use Models\ModelConect;

class CLassEvents extends ModelConect
{
    #Trazer os dados de eventos do banco
    public function getEvents()
    {
        $b=$this->conectDB()
    }
}