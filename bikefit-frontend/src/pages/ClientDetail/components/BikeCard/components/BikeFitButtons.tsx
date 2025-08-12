import { useCallback, useEffect, useState } from 'react';
import { BikeFitService } from '../../../../../services';
import { IBikeFit } from '../../../../../types';
import { Button } from 'react-bootstrap';

import { useBikeFits } from '../../../../../context/BikeFitContext';

interface BikeProp {
  id: number;
}

const BikeFitButtons: React.FC<BikeProp> = ({ id }) => {
  const { setBikefit } = useBikeFits();

  const [bikeFits, setBikeFits] = useState<IBikeFit[] | undefined>();

  const getBikeFits = useCallback(async () => {
    try {
      const response = await BikeFitService.getBikefitByBike(id);
      setBikeFits(response);
    } catch (error) {
      console.error("Erro ao buscar bikefits:", error);
    }
  }, [id]);

  useEffect(() => {
    getBikeFits();
  }, [getBikeFits]);

  return (
    <div className="d-flex flex-row justify-content-start gap-2 mt-3">
      {bikeFits &&
        bikeFits.map((item) => {
          return (
            <Button
              key={item.id}
              onClick={() => {
                setBikefit(item);
              }}
            >
              {item.DtCadastro ? ` ${new Date(item.DtCadastro).toLocaleDateString()}` : `BikeFit Id: ${item.id}`}
            </Button>
          );
        })}
    </div >
  );
};

export default BikeFitButtons;