import { RestSerializer } from 'miragejs';

export default RestSerializer.extend({
  serialize(object, request) {
    return {
      data: object.models.map((model) => {
        return {
          type: 'year',
          id: model.id,
          attributes: {
            startYear: model.startYear,
            endYear: model.endYear,
          },
        };
      }),
    };
  },
});
