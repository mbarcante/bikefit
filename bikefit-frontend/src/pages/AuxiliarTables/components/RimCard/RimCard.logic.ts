import { RimService } from "@/services";
import { useState } from "react";

const useRimCard = () => {
    const [rim, setRim] = useState<string>('');
    const getRims = () => {
        const response = RimService.getAllRims();

    };
    return { rim, setRim }

}

export default useRimCard;