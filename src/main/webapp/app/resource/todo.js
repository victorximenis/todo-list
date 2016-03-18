/**
 * Created by victor on 17/03/16.
 */
app.factory("Todo", function TodoFactory($resource) {
    return $resource("/todo/:id", { id: '@id' },
        {
            update: {
                method: 'PUT' // this method issues a PUT request
            }
        }
    );
});