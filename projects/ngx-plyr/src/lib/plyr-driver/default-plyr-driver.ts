import Plyr from "plyr";
import {
  PlyrDriver,
  PlyrDriverCreateParams,
  PlyrDriverDestroyParams,
  PlyrDriverUpdateSourceParams,
} from "./plyr-driver";

export class DefaultPlyrDriver implements PlyrDriver {
  create(params: PlyrDriverCreateParams) {
    console.log(Plyr, "it is plyr");
    return new Plyr(params.videoElement, params.options);
  }

  updateSource(params: PlyrDriverUpdateSourceParams) {
    params.plyr.source = params.source;
  }

  destroy(params: PlyrDriverDestroyParams) {
    params.plyr.destroy();
  }
}
