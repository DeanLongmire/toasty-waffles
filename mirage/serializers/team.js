import { RestSerializer } from 'miragejs';

export default RestSerializer.extend({
  serialize(object, request) {
    return {
      data: object.models.map((model) => {
        return {
          type: 'team',
          id: model.id,
          attributes: {
            teamName: model.teamName,
          },
        };
      }),
    };
  },
});
